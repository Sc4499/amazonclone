import React, { useEffect, useState } from "react";
import "./payment.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./stateprovider";
import { getbaskettotal } from "./reducer";
import {useHistory } from "react-router";
import Checkoutproduct from "./checkoutproduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Payment = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);


  useEffect(() => {
   const getClientSecret = async() => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?tatal=${getbaskettotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret)
    };
    getClientSecret();
  }, [basket]);


  const handlesubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntend}) => {

      setSucceeded(true);
      setError(null)
      setProcessing(false)

      history.replace('/orders')
    })
  };
  const handlechange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div class="payment_heading">
        <h5>Checkout ({basket?.length} items)</h5>
      </div>
      <div className="payment_row">
        <div className="Payment_address">
          <h5>Delivery Address</h5>
        </div>
        <div className="payment_add">
          <p>{user?.email}</p>
          <p>1006 React Lane</p>
          <p>Uttarpradesh ,India</p>
        </div>
      </div>
      <div className="payment_row">
        <div className="Payment_item_heading">
          <h5>Product Review & delivery</h5>
        </div>
        <div className="payment_item">
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment_row">
        <div className="Payment_method">
          <h5>Payment Method</h5>
        </div>
        <div className="payment_card">
          <form onSubmit={handlesubmit}>
            <CardElement onChange={handlechange} />
            <div className="payment_detailcontainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>
                      Total Order:<strong>{value}</strong>
                    </h3>
                  </>
                )}
                decimalScale={2}
                value={getbaskettotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                type="button"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
