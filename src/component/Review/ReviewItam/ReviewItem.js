import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewItem.css'

const ReviewItem = (props) => {
   console.log(props);
   const {name , quantity, price, key} = props.pd;
  //  const handleRemoveProduct = props.handleRemoveProduct;
 
    return (
        <div className="reviewItem"> 
          <h3> <Link className="text" to="/shop">{name}</Link></h3>
          <p>$  {price}</p>
          <p>Quantity  {quantity}</p>
          <button onClick={() =>props.handleRemoveProduct(key)} className="mane-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;