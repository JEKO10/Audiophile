import { Link } from "react-router-dom";
import First from "../images/image-xx99-mark-two.png";
import Second from "../images/image-xx99-mark-one-single.png";
import Third from "../images/image-xx59.png";

function ProductsH() {
  return (
    <section className="products">
      <div>
        <img
          src={First}
          alt="IMG"
          id="imgHeadphone"
          data-aos="fade-right"
          data-aos-once="true"
        />
        <div data-aos="fade-left" data-aos-once="true">
          <h3>New Product</h3>
          <h1>
            XX99 MARK II <br /> Headphones
          </h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to="/xx99-mark-two-headphones">
            <button>See Product</button>
          </Link>
        </div>
      </div>
      <div>
        <div data-aos="fade-right" data-aos-once="true">
          <h1>
            XX99 MARK I <br /> Headphones
          </h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link to="/xx99-mark-one-headphones">
            <button>See Product</button>
          </Link>
        </div>
        <img
          src={Second}
          alt="IMG"
          id="imgHeadphone"
          data-aos="fade-left"
          data-aos-once="true"
        />
      </div>
      <div>
        <img
          src={Third}
          alt="IMG"
          id="imgHeadphone"
          data-aos="fade-right"
          data-aos-once="true"
        />
        <div data-aos="fade-left" data-aos-once="true">
          <h1>
            XX59 <br /> Headphones
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link to="/xx59-headphones">
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsH;
