import React from "react";
import "./subtotal.css";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./stateprovider";
import { getbaskettotal } from "./reducer";
import { useHistory } from "react-router";
const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              &nbsp;Thid order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbaskettotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="ptcbtn" onClick={e=>history.push('/payment')}>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
