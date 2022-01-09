import { Link } from "react-router-dom";
import First from "../images/image-zx9.png";
import Second from "../images/image-zx7.png";

function ProductsS() {
  return (
    <section className="products">
      <div>
        <img src={First} alt="IMG" id="imgSpeaker" />
        <div>
          <h3>New Product</h3>
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link to="/zx9-speaker">
            <button>See Product</button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h1>ZX7 Speaker</h1>
          <p>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <Link to="/zx7-speaker">
            <button>See Product</button>
          </Link>
        </div>
        <img src={Second} alt="IMG" id="imgSpeaker" />
      </div>
    </section>
  );
}

export default ProductsS;
