import Image from "../../images/image-xx99-mark-one-single.png";
import FirstGallery from "../../images/image-gallery-1 (1).jpg";
import SecondGallery from "../../images/image-gallery-2(1).jpg";
import ThirdGallery from "../../images/image-gallery-3 (1).jpg";
import FirstLike from "../../images/image-xx99-mark-two.png";
import SecondLike from "../../images/image-yx1-earphones.png";
import ThirdLike from "../../images/image-xx59.png";
import { Link } from "react-router-dom";

function ProductXx99One() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h1>
              XX99 MARK I <br /> Headphones
            </h1>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <h4>$ 1,750</h4>
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
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is includes with a balanced
            gold connector.
          </p>
        </div>
        <div className="box">
          <h1>In The Box</h1>
          <ul>
            <li>
              <span>1x</span> Headphone Unit
            </li>
            <li>
              <span>2x</span> Replacement Earcups
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 5m Audio Cable
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
            <h2>XX99 MARK II</h2>
            <Link to="/xx99-mark-two-headphones">
              <button>See Product</button>
            </Link>
          </div>
          <div>
            <img src={SecondLike} alt="IMG" />
            <h2>YX1 WIRELESS</h2>
            <Link to="/yx1-earphones">
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

export default ProductXx99One;
