import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';


const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    const [pick, setPick] = useState([]);

    const chooseRandomly = () => {
        const index = Math.floor(Math.random() * cart.length);       // a random index is returned
        setPick(cart[index]);
    }

    useEffect(() => {
        console.log('inside pick');
        const found = cart.find(cartItem => cartItem.id === pick.id);

        if (cart.length === 0 || !found)
            setPick([]);
        console.log('outside pick');
    }, [cart]);

    console.log(pick);

    const deleted = (itemId) => {
        const rest = cart.filter(cartItem => cartItem.id !== itemId);
        props.setCart([...rest]);
    }

    return (
        <div className="cart">
            <h4>Select Items</h4>
            <p>{cart.length}</p>
            {
                cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} deleted={() => deleted(cartItem.id)}></CartItem>)
            }
            <button onClick={chooseRandomly}>Choose 1 For Me</button>
            {
                pick ? <CartItem key={pick.id} cartItem={pick} isPick={true}></CartItem> : <></>
            }
            <button onClick={props.chooseAgain}>Choose Again</button>
        </div>
    );
};

export default Cart;