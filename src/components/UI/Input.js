import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id} className="form-label">
        {props.label}
      </label>
      <input ref={ref} {...props.input} className="form-control" />
    </>
  );
});

export default Input;
