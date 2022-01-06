import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import Cart from "../images/cart.svg";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/headphones" activeClassName="active">
              Headphones
            </NavLink>
          </li>
          <li>
            <NavLink to="/speakers" activeClassName="active">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/earphones" activeClassName="active">
              Earphones
            </NavLink>
          </li>
        </ul>
        <Link to="/cart">
          <img src={Cart} alt="IMG" id="cart" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
