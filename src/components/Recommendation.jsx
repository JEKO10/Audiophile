import React from "react";
import Speaker from "../images/image-product-speaker.jpg";
import Headphone from "../images/image-xx99-mark-one.jpg";
import Earphone from "../images/image-yx1-earphones.jpg";

function Recommendation() {
  return (
    <section className="recommend">
      <div>
        <img src={Headphone} alt="IMG" />
        <h2>Headphones</h2>
        <button>
          <a href="">Shop</a>
        </button>
      </div>
      <div>
        <img src={Speaker} alt="IMG" />
        <h2>Speakers</h2>
        <button>
          <a href="">Shop</a>
        </button>
      </div>
      <div>
        <img src={Earphone} alt="IMG" />
        <h2>Earphones</h2>
        <button>
          <a href="">Shop</a>
        </button>
      </div>
    </section>
  );
}

export default Recommendation;
