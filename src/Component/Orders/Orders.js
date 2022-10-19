import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remining = cart.filter((product) => product.id !== id);
    setCart(remining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No items for review .please <Link to="/shop">Shop</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
