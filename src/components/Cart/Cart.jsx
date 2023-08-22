import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    console.log(cart)
   let quantity = 0;
   for(let i  = 0;i<cart.length;i++){
    quantity += cart[i].quantity;
   }
    return (
        <div className='cart'>
            <h5>Orders summary</h5>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${ }</p>
            <p>Total Shipping Charge : ${ }</p>
            <p>Tax : ${ }</p>
            <h5>Grand Total : ${ }</h5>
            <button className='delete-btn'>Clear Cart&nbsp;<FontAwesomeIcon icon={faTrashCan} /></button><br />
            <button className='review-btn'>Review Order&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;