import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const handleAddToCart = (product) => {
        if (cart.length >= 4) {
            alert('You can not add more than four products to the cart');
        } else {
            const exists = cart.find(cartItem => cartItem.id === product.id);

            if (!exists) {
                setCart([...cart, product]);
            } else {
                alert('This product is already inside the cart.');
            }
        }
        console.log(cart);
    }




    const chooseAgain = () => {
        setCart([]);
        <Cart cart={cart}></Cart>           // to reset the pick array
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} chooseAgain={chooseAgain} setCart={setCart}></Cart>
            </div>
        </div >
    );
};

export default Shop;