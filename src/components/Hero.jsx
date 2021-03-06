import { Link } from "react-router-dom";
import Headphone from "../images/image-hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h3>New Product</h3>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/xx99-mark-two-headphones">
          <button>See Product</button>
        </Link>
      </div>
      <img src={Headphone} alt="IMG" />
    </section>
  );
}

export default Hero;
