import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await (must)
    const storedCart = getShoppingCart();
    console.log(storedCart);
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send to things , return an array of these things or an object. Because javascript function cannot return more than one thing. It can return only one thing.
    return savedCart;
}

export default cartProductsLoader;