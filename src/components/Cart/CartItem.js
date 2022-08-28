import React from "react";

const CartItem = ({ name, price, onRemove, onAdd, amount }) => {
  return (
    <div className="d-flex justify-content-between bg-light px-2 align-items-center my-2 fw-bold">
      <div>
        {name}:- <span>{price.toFixed(2)}</span>
      </div>
      <div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={onRemove}
            type="button"
            className="btn btn-danger shadow-none"
          >
            -
          </button>
          <button type="button" className="btn btn-light shadow-none">
            {amount}
          </button>
          <button
            onClick={onAdd}
            type="button"
            className="btn btn-success shadow-none"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
