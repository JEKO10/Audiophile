import Image from "../../images/image-xx59.png";
import FirstGallery from "../../images/image-gallery-1 (3).jpg";
import SecondGallery from "../../images/image-gallery-2 (3).jpg";
import ThirdGallery from "../../images/image-gallery-3 (3).jpg";
import FirstLike from "../../images/image-xx99-mark-two.png";
import SecondLike from "../../images/image-yx1-earphones.png";
import ThirdLike from "../../images/image-xx99-mark-one-single.png";
import { Link } from "react-router-dom";

function ProductXx59() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h1>
              XX59 <br /> Headphones
            </h1>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <h4>$ 899</h4>
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
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
          </p>
          <p>
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
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
            <button>See Product</button>
          </div>
          <div>
            <img src={ThirdLike} alt="IMG" />
            <h2>XX99 MARK I</h2>
            <Link to="/xx99-mark-one-headphones">
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductXx59;
