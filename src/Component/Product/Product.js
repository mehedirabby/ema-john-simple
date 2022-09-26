import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleClickToCart}) => {
    // const {product,handleClickToCart}=props;
    const {name,img,seller,price,ratings}=product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p><b>Price:${price}</b></p>
            <p>Seller:{seller}</p>
            <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>handleClickToCart(product)} className='btn-cart'>
                <p className='00'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            
                
            </button>
        </div>
    );
};

export default Product;