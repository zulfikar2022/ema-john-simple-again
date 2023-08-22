import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, totalPrice,shippingCost }) => {
    console.log(cart)
    return (
        <div className='cart'>
            <h5>Orders summary</h5>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge : ${shippingCost.toFixed(2) }</p>
            <p>Tax : ${ (totalPrice * 0.07).toFixed(2) }</p>
            <h5>Grand Total : ${ (totalPrice+shippingCost+(totalPrice*0.07)).toFixed(2) }</h5>
            <button className='delete-btn'>Clear Cart&nbsp;<FontAwesomeIcon icon={faTrashCan} /></button><br />
            <button className='review-btn'>Review Order&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;