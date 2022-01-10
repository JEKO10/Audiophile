import { Link } from "react-router-dom";
import Speaker from "../images/image-speaker-zx9.png";
import Earphone from "../images/image-earphones-yx1.jpg";

function Collage() {
  return (
    <section className="collage">
      <div className="first" data-aos="zoom-in" data-aos-once="true">
        <img src={Speaker} alt="IMG" />
        <div>
          <h1>
            ZX9 <br /> Speaker
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/zx9-speaker">
            <button>See Product</button>
          </Link>
        </div>
      </div>
      <div className="second" data-aos="zoom-out" data-aos-once="true">
        <h1>ZX7 SPEAKER</h1>
        <Link to="/zx7-speaker">
          <button>See Product</button>
        </Link>
      </div>
      <div className="third" data-aos="zoom-in" data-aos-once="true">
        <img src={Earphone} alt="IMG" />
        <div>
          <h1>YX1 EARPHONES</h1>
          <Link to="/yx1-earphones">
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Collage;
