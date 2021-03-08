import React from 'react';
import { Link } from 'react-router-dom';
import './Carts.css'

const Carts = (props) => {
    
     const cart = props.cart;
     console.log(cart)
     const totalPrice = cart.reduce((total , prd) => total + prd.price , 0)
     

     let shipping = 0;
     if(totalPrice > 35){
        shipping = 0;
     }
     else if(totalPrice > 15){
         shipping = 4.57;
     }
     else if(totalPrice > 0){
         shipping = 12.99
     }

     const tex = totalPrice / 20;

    return (
        <div >
            <h1>Oder summary </h1>
            <h4>Item Orders:{cart.length} </h4>
            <p>Product Price:{(totalPrice).toFixed(2)}</p>    
            <p><small>Shipping: {shipping}</small></p>
            <p>Tex + Vat: {(tex).toFixed(2)}</p>
            <h5>Total Price: $ {(totalPrice).toFixed(1) + shipping}</h5>
            <br/>
             <Link to="/review">  <button className="mane-btn">Review Order</button></Link>
        </div>
    );
};

export default Carts;