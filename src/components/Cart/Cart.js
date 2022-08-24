import React, { useContext } from "react";
import CartContext from "../store/cart_context";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = cartCtx.items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ));
  return (
    <Modal onClose={props.onClose}>
      <div className="container">
        {cartItems}
        <div className="row">
          <div className="col-9 fw-bold fs-4">Total Amount</div>
          <div className="col-3 text-end fw-bold">{totalAmount}</div>
        </div>
        <div className="text-end">
          <button onClick={props.onClose} className="btn btn-success mx-1">
            Close
          </button>
          <button className="btn btn-success mx-1">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
