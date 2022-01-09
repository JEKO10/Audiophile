import Image from "../../images/image-zx7.png";
import FirstGallery from "../../images/image-gallery-1 (6).jpg";
import SecondGallery from "../../images/image-gallery-2 (6).jpg";
import ThirdGallery from "../../images/image-gallery-3 (6).jpg";
import FirstLike from "../../images/image-zx9.png";
import SecondLike from "../../images/image-yx1-earphones.png";
import ThirdLike from "../../images/image-xx59.png";
import { Link } from "react-router-dom";

function ProductZx7() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h1>ZX7 Speaker</h1>
            <p>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <h4>$ 3,500</h4>
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
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
          </p>
          <p>
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>
        </div>
        <div className="box">
          <h1>In The Box</h1>
          <ul>
            <li>
              <span>2x</span> Speaker Unit
            </li>
            <li>
              <span>2x</span> Speaker Cloth Panel
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 5m Audio Cable
            </li>
            <li>
              <span>1x</span> 7.5m Optical Cable
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
            <h2>ZX9 SPEAKER</h2>
            <Link to="/zx9-speaker">
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

export default ProductZx7;
