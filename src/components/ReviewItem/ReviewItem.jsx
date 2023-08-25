import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleDeleteProductFromReview }) => {
    return (
        <div className='review-item'>
            <img src={product.img} alt="" />
            <div className="products-details-and-delete">
                <div className="products-details">
                    <h5>{product.name}</h5>
                    <p>Price : <span className='text-orange'> ${product.price}</span></p>
                    <p>Shipping Charge : <span className='text-orange'>${product.shipping * product.quantity}</span></p>
                </div>
                <div className="delete-button" onClick={() => handleDeleteProductFromReview(product.id)}>
                    <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;