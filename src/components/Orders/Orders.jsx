import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    
    const handleDeleteProductFromReview = (cartId) =>{
        console.log(cartId);
        let newSavedCart = [];
        for(let i = 0;i<cart.length;i++){
            if(cart[i].id !== cartId){
                newSavedCart.push(cart[i]);
            }
        }
        setCart(newSavedCart)
        removeFromDb(cartId)
        console.log('new Saved cart ',newSavedCart);
        

    }
    console.log(savedCart);
    return (
        <div className='shop-container'>

            <div className="review-container">
               
                {
                    cart.map(product => <ReviewItem
                         key={product.id} 
                         product={product}
                         handleDeleteProductFromReview={handleDeleteProductFromReview}
                         ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart> 
            </div>

        </div>
    );
};

export default Orders;