import React from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props.product)
    const {img, name, price, seller , shipping, stock, key, category} = props.product;
    return (
         <div className="product">
         <div>
            <img src={img} alt=""/>
         </div>
         <div >
          <h4 className="product-name">{name}</h4>
          <br/>
          <p>by: <small>{seller}</small></p>
          <br/>
          <p>${price}</p>
          <br/>
           <p>only {stock} left in stock - order soon</p>

           <button>Add to Cart</button>
         </div>
    
         </div>
    );
};

export default Product;