import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addededProduct = products.find((product) => product.id === id);
      if (addededProduct) {
        const quantity = storedCart[id];
        addededProduct.quantity = quantity;
        savedCart.push(addededProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleClickToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClickToCart={handleClickToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/order">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;