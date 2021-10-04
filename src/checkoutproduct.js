import React from 'react';
import "./checkoutproduct.css";
import {useStateValue} from "./stateprovider";
const Checkoutproduct = ({id, title, image, price, rating}) => {
  const [{ basket }, dispatch] = useStateValue();
  const remove_basket =()=>{
    //remove the item from the basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,

    })
  }
  return (
    <div className="checkoutpro">
        <div className="checkout_img">
            <img src={image} class="img-fluid"></img>
        </div>
      <div className="checkout_info">
          <p className="checkout_product_title">{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkout_rating">
          {Array(rating).fill().map((_, i)=>(
               <p>⭐</p>
            ))} 
          </div>
          <button className="ptcbtn" onClick={remove_basket}>Remove from basket</button>
      </div>
      

    </div>
  )
}

export default Checkoutproduct;
