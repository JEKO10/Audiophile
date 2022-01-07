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
            <h2>$ 2,999</h2>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductXx99Two;
