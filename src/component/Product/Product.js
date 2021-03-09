import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller , shipping, stock, key, category} = props.product;
    return (
         <div className="product">
         <div>
            <img src={img} alt=""/>
         </div>
         <div >
          <h4 className="product-name"><Link className="text" to={"/product/" + key}> {name}</Link></h4> 
          <br/>
          <p>by: <small>{seller}</small></p>
          <br/>
          <p>Price ${price}</p>
          <br/>
           <p>only {stock} left in stock - order soon</p>

          { props.showAddCard && <button className="mane-btn" onClick={() => props.handleAddProduct(props.product)}>  <FontAwesomeIcon icon={faShoppingBasket} />Add to Cart</button>}
         </div>
    
         </div>
    );
};

export default Product;