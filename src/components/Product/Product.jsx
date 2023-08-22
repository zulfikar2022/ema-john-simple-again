import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product,handleAddToCart }) => {
    const { img, name, price, seller, ratings,id } = product;
  
    return (
        <div className='individual-product'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h3 className='product-name'>{name}</h3>
            <h5 className='product-price'>Price : {price}</h5>
            <br />
            <p>Manufacturer : {seller}</p>
            <p>Rating: {ratings} Star</p>
            <button onClick={() => handleAddToCart(product)}>Add To Cart &nbsp;<FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;