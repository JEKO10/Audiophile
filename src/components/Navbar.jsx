import React from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/cart.svg";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Logo" />
        <ul>
          <li className="active">Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <img src={Cart} alt="IMG" id="cart" />
      </div>
    </nav>
  );
}

export default Navbar;
