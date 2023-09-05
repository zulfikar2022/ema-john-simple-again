import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added Product
        for (const id in storedCart) {
            // get product from products state by  using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            console.log('addedd product', addedProduct);
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }
    const handleClearCart = () => {
        deleteShoppingCart();
        setCart([]);
    }


    return (
        <div className='shop-container'>

            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <span>Order Review</span>
                    </Cart>
            </div>

        </div>
    );
};

export default Shop;