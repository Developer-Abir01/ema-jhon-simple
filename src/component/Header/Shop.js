import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Carts from '../Carts/Carts';





const Shop = () => {
const first10  = fakeData.slice(0, 10);
const [products, setProducts] = useState(first10);
const [cart, setCart] = useState([]);


const handleAddProduct = (product) => {
    // console.log("producat ", product);
   const newCart = [...cart, product];
   setCart(newCart);

}


    return (
        <div  className="shop-container">
         <div className="product-container">
    
            {
                products.map(pd => <Product
                    showAddCard={true}
                    handleAddProduct = {handleAddProduct}
                     product={pd}
                     > </Product>)
            }
         
         </div>
         <div className="card-container">
           <Carts cart={cart}></Carts>
         </div>
       
        </div>
    );
};

export default Shop;