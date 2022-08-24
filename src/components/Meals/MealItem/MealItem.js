import React, { useContext } from "react";
import CartContext from "../../store/cart_context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `₹${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className="row bg-light my-2 py-2 d-flex justify-content-between align-items-center">
      <div className="col-md-10 col-8">
        <h4>{props.name}</h4>
        <div>{props.description}</div>
        <div className="text-success fw-bold fs-5">{price}</div>
      </div>
      <div className="col-md-2 col-4">
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
