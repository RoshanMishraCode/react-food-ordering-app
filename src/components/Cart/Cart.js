import React, { useContext } from "react";
import CartContext from "../store/cart_context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const deleteItemToCartHandler = (id) => {
    cartCtx.deleteItem(id);
  };
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
      amount={item.amount}
      deleteItem={deleteItemToCartHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.length === 0 ? (
        <div
          style={{ height: "20vh" }}
          className="d-flex justify-content-center align-items-center text-warning"
        >
          <h3>Cart is empty</h3>
        </div>
      ) : (
        <div className="container">
          <h4 className="text-center pb-2">Selected Items</h4>
          <div style={{ maxHeight: "40vh", overflow: "auto" }}>{cartItems}</div>
          <div className="row py-3">
            <div className="col-9 fw-bold fs-4">Total Amount</div>
            <div className="col-3 text-end fw-bold fs-4">₹ {totalAmount}</div>
          </div>
          <div className="text-end">
            <button onClick={props.onClose} className="btn btn-success mx-1">
              Close
            </button>
            {hasItems && (
              <button className="btn btn-success mx-1">Order</button>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
