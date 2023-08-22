import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart ] = useState([]);
    

    useEffect(() => {
        fetch('products.json')    
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
 
    },[])

    const handleAddToCart = (product) => {
       
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);

    } 
    let totalPrice = 0, shippingCost = 0 ;
   
    for(let i = 0;i<cart.length;i++){
        totalPrice += cart[i].price;
        shippingCost += cart[i].shipping;
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