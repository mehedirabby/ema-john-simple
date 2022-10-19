import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.01).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3>Order Summery</h3>
      <p>Selected Item:{quantity}</p>
      <p>Total price:${total}</p>
      <p>Total Shipping:${shipping}</p>
      <p>Tax:${tax}</p>
      <h5>Grand Total:${grandTotal}</h5>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
