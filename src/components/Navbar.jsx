import { Link } from "react-router-dom";
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
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/earphones">Earphones</Link>
          </li>
        </ul>
        <img src={Cart} alt="IMG" id="cart" />
      </div>
    </nav>
  );
}

export default Navbar;
