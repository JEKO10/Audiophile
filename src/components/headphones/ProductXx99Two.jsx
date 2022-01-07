import Image from "../../images/image-xx99-mark-two-single.png";

function ProductXx99Two() {
  return (
    <>
      <section className="products">
        <div>
          <img src={Image} alt="IMG" id="imgHeadphone" />
          <div>
            <h3>New Product!</h3>
            <h1>
              XX99 MARK II <br /> Headphones
            </h1>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h4>$ 2,999</h4>
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
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
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
            <li>
              <span>1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductXx99Two;
