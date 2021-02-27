import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';




const Shop = () => {
const first10  = fakeData.slice(0, 10);
const [products, setProducts] = useState(first10);


    return (
        <div  className="shop-container">
         <div className="product-container">
    
            {
                products.map(pd => <Product product={pd}> </Product>)
            }
         
         </div>
         <div className="card-container">
             <h1>This is card</h1>
         </div>
       
        </div>
    );
};

export default Shop;