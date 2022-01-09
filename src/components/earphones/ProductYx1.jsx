import Image from "../../images/image-yx1-earphones.png";
import FirstGallery from "../../images/image-gallery-1 (4).jpg";
import SecondGallery from "../../images/image-gallery-2 (4).jpg";
import ThirdGallery from "../../images/image-gallery-3 (4).jpg";
import FirstLike from "../../images/image-xx99-mark-one-single.png";
import SecondLike from "../../images/image-xx99-mark-two.png";
import ThirdLike from "../../images/image-xx59.png";
import { Link } from "react-router-dom";

function ProductYx1() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h3>New Product!</h3>
            <h1>
              YX1 Wireless <br /> Earphones
            </h1>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <h4>$ 599</h4>
            <div className="stock">
              <button>-</button>
              <p id="num">1</p>
              <button>+</button>
              <button id="add">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div>
          <h1>Features</h1>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="box">
          <h1>In The Box</h1>
          <ul>
            <li>
              <span>2x</span> Earphone Unit
            </li>
            <li>
              <span>6x</span> Multi-Size Earplugs
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> USB-C Charging Cable
            </li>
            <li>
              <span>1x</span>
              Travel Pouch
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery">
        <div>
          <img src={FirstGallery} alt="IMG" />
          <img src={SecondGallery} alt="IMG" />
        </div>
        <img src={ThirdGallery} alt="IMG" />
      </section>
      <section className="alsoLike">
        <h1>You May Also Like</h1>
        <div>
          <div>
            <img src={FirstLike} alt="IMG" />
            <h2>XX99 MARK I</h2>
            <Link to="/xx99-mark-one-headphones">
              <button>See Product</button>
            </Link>
          </div>
          <div>
            <img src={SecondLike} alt="IMG" />
            <h2>XX99 MARK II</h2>
            <Link to="/xx99-mark-two-headphones">
              <button>See Product</button>
            </Link>
          </div>
          <div>
            <img src={ThirdLike} alt="IMG" />
            <h2>XX59</h2>
            <Link to="/xx59-headphones">
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductYx1;
