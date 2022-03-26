import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faDollar } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { id, name, price, img } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />

            <div className="product-info">
                <p>Product: <b>{name}</b></p>
                <p>Price: <b>{price}tk</b></p>
            </div>

            <button onClick={() => props.handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;