import React, { useContext } from "react";
import CartContext from "../store/cart_context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      onClick={props.onClick}
      id="cart"
      className="ms-auto btn btn-dark cart-btn"
    >
      <i className="bi bi-cart-fill"></i>
      <span className="mx-2">Your Cart</span>
      <span className="bg-danger px-3 py-1 rounded-pill">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
