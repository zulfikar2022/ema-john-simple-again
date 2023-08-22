import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart ] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [shippingCost,setShippingCost] = useState(0);

    useEffect(() => {
        fetch('products.json')    
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        // console.log("product ID from shop.jsx file : ",product);
        const newCart = [...cart,product];
        setCart(newCart);
       
        const newPrice = totalPrice + product.price;
        const newShippingCost = shippingCost + product.shipping;
        setShippingCost(newShippingCost);
        setTotalPrice(newPrice);
    }
    
    return (
        <div className='shop-container'>
                <div className="products-container">
                   
                    {
                        products.map(product => <Product 
                            key={product.id}
                            product = {product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>
                 <div className="cart-container">
                    <Cart 
                    cart = {cart} 
                    totalPrice = {totalPrice}
                    shippingCost = {shippingCost}
                    ></Cart>
                 </div>
              
        </div>
    );
};

export default Shop;