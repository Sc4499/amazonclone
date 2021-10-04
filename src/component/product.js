import React from "react";
import "./product.css";
import { useStateValue } from "../stateprovider";

const Product = ({id, title, image, price, rating}) => {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);
  const addtobasket=()=>{
    //dispatch the item into data layer
    dispatch({
      type : "ADD_TO_BASKET",
      item:{
        id : id,
        title: title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p class="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating).fill().map((_, i)=>(
               <p>⭐</p>
            ))}
        </div>
  
      </div>
      <img src={image} class="proimg"></img>
        <button onClick={addtobasket}> Add to Basket </button>
    </div>
  );
};

export default Product;
