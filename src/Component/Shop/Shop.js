import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import {addToDb, getShoppingCart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import './Shop.css'
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    const [cart,setCart]=useState([])
   

    useEffect(()=>{
        
        const storedCart = getShoppingCart();
        const savedCart  =[];
        for(const id in storedCart){
            const addededProduct = products.find(product => product.id ===id)
            if(addededProduct){
                const quantity = storedCart[id]
                addededProduct.quantity = quantity;
                savedCart.push(addededProduct)

            }
        }
        setCart(savedCart);
    },[products])



    const handleClickToCart =(product)=>{
        console.log(product);
        const newCart =[...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
    
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id} 
                        product={product} 
                        handleClickToCart={handleClickToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;