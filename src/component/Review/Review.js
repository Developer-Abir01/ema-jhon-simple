import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItam/ReviewItem';


const Review = () => {
    const [carts, setCarts] = useState([]);
    
    const handleRemoveProduct = (productKey) => {
        // console.log("click me");
        const newCart = carts.filter(pd => pd.key !== productKey);
        setCarts(newCart);
        removeFromDatabaseCart(productKey)
    }



    useEffect(()=>{
   const saveData = getDatabaseCart();
   const productKeys = Object.keys(saveData);
   const cartProducts = productKeys.map(key => {
     const product = fakeData.find(pd => pd.key === key);
     product.quantity = saveData[key];
     return product
   })
    setCarts(cartProducts)

    },[])
    return (
        <div>
           <h1>Cart: {carts.length}</h1> 
           
          {
              carts.map(pd => <ReviewItem 
                key={pd.key}
                handleRemoveProduct ={handleRemoveProduct}
                pd ={pd}
                 ></ReviewItem>)
          }
         
        </div>
    );
};

export default Review;