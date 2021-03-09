import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Carts from '../Carts/Carts';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';










const Shop = () => {
const first10  = fakeData.slice(0, 10);
const [products, setProducts] = useState(first10);
const [cart, setCart] = useState([]);


useEffect(() => {
    const saveData = getDatabaseCart();
    const productKeys = Object.keys(saveData)
    const previousCart = productKeys.map(existingKey => {
        const product = fakeData.find(pd => pd.key === existingKey);
        product.quantity = saveData[existingKey];
        return product;
    })
   setCart(previousCart);
},[])

const handleAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if(sameProduct){
     const count = sameProduct.quantity +1;
     sameProduct.quantity = count;
     const others = cart.filter(pd => pd.key !== toBeAdded);
     newCart = [...others, sameProduct ]
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product]
    }

    // console.log("producat ", product);
   
   setCart(newCart);
  
   addToDatabaseCart(product.key, count)

}


    return (
        <div  className="twin-container">
         <div className="product-container">
    
            {
                products.map(pd => <Product
                    showAddCard={true}
                    key={pd.key}
                    handleAddProduct = {handleAddProduct}
                     product={pd}
                     > </Product>)
            }
         
         </div>
         <div className="card-container">
           <Carts cart={cart}>
                           
           <Link to="/review">  <button className="mane-btn">Review Order</button></Link>

           </Carts>
         </div>
       
        </div>
    );
};

export default Shop;