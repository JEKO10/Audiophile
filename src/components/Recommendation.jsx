import { Link } from "react-router-dom";
import Speaker from "../images/image-product-speaker.jpg";
import Headphone from "../images/image-xx99-mark-one.jpg";
import Earphone from "../images/image-yx1-earphones-recommend.jpg";

function Recommendation() {
  return (
    <section className="recommend">
      <div>
        <img src={Headphone} alt="IMG" />
        <h2>Headphones</h2>
        <Link to="/headphones">
          <button>Shop</button>
        </Link>
      </div>
      <div>
        <img src={Speaker} alt="IMG" />
        <h2>Speakers</h2>
        <Link to="/speakers">
          <button>Shop</button>
        </Link>
      </div>
      <div>
        <img src={Earphone} alt="IMG" />
        <h2>Earphones</h2>
        <Link to="/earphones">
          <button>Shop</button>
        </Link>
      </div>
    </section>
  );
}

export default Recommendation;
