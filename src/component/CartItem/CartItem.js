import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const CartItem = (props) => {
    const { id, name, img } = props.cartItem;
    return (
        <div className="cart-item">
            {
                img ? <img src={img} alt=""></img> : <></>
            }

            {
                name ? <h4>{name}</h4> : <></>
            }

            {
                (id && !props.isPick) ? <button onClick={() => props.deleted(id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button> :
                    (id && props.isPick) ? <button style={{ backgroundColor: 'white' }}>Buy</button> : <></>
            }

        </div >
    );
};

export default CartItem;

