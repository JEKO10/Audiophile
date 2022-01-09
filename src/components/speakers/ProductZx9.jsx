import Image from "../../images/image-zx9.png";
import FirstGallery from "../../images/image-gallery-1 (5).jpg";
import SecondGallery from "../../images/image-gallery-2 (5).jpg";
import ThirdGallery from "../../images/image-gallery-3 (5).jpg";
import FirstLike from "../../images/image-zx7.png";
import SecondLike from "../../images/image-yx1-earphones.png";
import ThirdLike from "../../images/image-xx59.png";
import { Link } from "react-router-dom";

function ProductZx9() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h3>New Product!</h3>
            <h1>ZX9 Speaker</h1>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h4>$ 4,500</h4>
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p>
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
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
              <span>1x</span> 10m Optical Cable
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery">
        <div>
          <img src={FirstGallery} alt="IMG" id="zx9ImgFirst" />
          <img src={SecondGallery} alt="IMG" id="zx9ImgSecond" />
        </div>
        <img src={ThirdGallery} alt="IMG" id="zx9ImgThird" />
      </section>
      <section className="alsoLike">
        <h1>You May Also Like</h1>
        <div>
          <div>
            <img src={FirstLike} alt="IMG" />
            <h2>ZX7 SPEAKER</h2>
            <Link to="/zx7-speaker">
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

export default ProductZx9;
