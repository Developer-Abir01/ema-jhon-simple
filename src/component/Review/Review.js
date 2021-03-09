import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItam/ReviewItem';
import Carts from '../Carts/Carts';
import { Link } from 'react-router-dom';
import happyImg from '../../images/giphy.gif';



const Review = () => {
    const [cart, setCart] = useState([]);

    const handleRemoveProduct = (productKey) => {
        // console.log("click me");
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    const [orderPlace, setOrderPlace] = useState(false);



     const handlePlaceOrder = () =>{
         setCart([]);
         setOrderPlace(true);
         processOrder();
     }

    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveData[key];
            return product
        })
        setCart(cartProducts)

    }, [])

    let thankYou;
    if(orderPlace){
        thankYou = <img src={happyImg} alt=""/>
    }


    return (
        <div className="twin-container">
            <div className="product-container" >
              

                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        handleRemoveProduct={handleRemoveProduct}
                        pd={pd}
                    ></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="card-container">
                <Carts cart={cart}>
                <Link to="/review">  <button onClick={handlePlaceOrder} className="mane-btn">Place Order</button></Link>
                </Carts>
            </div>
        </div>
    );
};

export default Review;