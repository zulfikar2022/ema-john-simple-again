import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Cart = ({ cart, handleClearCart,children }) => {

    console.log('children of cart ',children.props.children)

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;


    for (let i = 0; i < cart.length; i++) {
        cart[i].quantity = cart[i].quantity || 1;
        quantity += cart[i].quantity;
        totalPrice += cart[i].price * cart[i].quantity;
        totalShipping += cart[i].shipping;
    }

    return (
        <div className='cart'>
            <h5>Orders summary</h5>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${(totalPrice * 0.07).toFixed(2)}</p>
            <h5>Grand Total : ${ }</h5>
            <button className='delete-btn' onClick={handleClearCart}>Clear Cart&nbsp;<FontAwesomeIcon icon={faTrashCan} /></button><br />

            {
                children.props.children === 'Order Review' ? 
                <Link to='/order'> 
                    <button className='review-btn'>{children}&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>:
                <Link to='/checkout'>
                    <button className='review-btn'>{children}&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
            }

            
        </div>
    );
};

export default Cart;