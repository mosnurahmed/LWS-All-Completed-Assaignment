import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart);
  let totalQuantity = 0;
  cartItems.forEach((product) => {
    totalQuantity += product.quantity;
  });

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/" href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalQuantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
