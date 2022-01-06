import Image from "../images/image-yx1-earphones.png";

function ProductsE() {
  return (
    <section className="products">
      <div>
        <img src={Image} alt="IMG" id="imgEarphone" />
        <div>
          <h3>New Product</h3>
          <h1>
            YX1 Wireless <br /> Earphones
          </h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button>See Product</button>
        </div>
      </div>
    </section>
  );
}

export default ProductsE;
