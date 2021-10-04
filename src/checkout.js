import React from "react";
import "./checkout.css";
import Checkoutproduct from "./checkoutproduct";
import Subtotal from "./subtotal";
import { useStateValue } from "./stateprovider";
const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/SmartACs/V208212308_IN_HETV_CLP_Echoflex_banner_1500x250.jpg"
          className="img-fluid"
        ></img>
        <div className="checkout_title">
          <h5>{user ?.email}</h5>
          <h2> Your Shopping Basket </h2>
        </div>
        <div className="checkout_Product_list">
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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
