import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Products.css';

const Products = (props) => {
    const{img, seller, name, ratings,price} = props.product;
    return (
        <div className="product">
            <img src={img} alt=""  />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p><small>Price:$ {price}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p ><small>Ratings: {ratings} stars</small></p>
            </div>
            <button  onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p class='button-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;