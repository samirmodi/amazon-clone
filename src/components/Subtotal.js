import React from "react";
import { useCartValue } from "../context/StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const {
    state: { basket },
    dispatch,
  } = useCartValue();
  const price = basket.reduce((a, c) => a + c.price, 0);
  console.log(price);
  return (
    <div className='subtotal'>
      <p>Subtotal ({basket.length}) items</p>
      <strong>Total: $ {price.toFixed(2)}</strong>
      <button className='subtotal__basketButton'>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
