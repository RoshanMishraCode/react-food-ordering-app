import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand bg-danger navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            ReactMeals
          </a>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </nav>
    </>
  );
};

export default Header;
