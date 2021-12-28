import React from "react";
import Headphone from "../images/image-xx99-mark.png";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h3>New Product</h3>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>
          <a href="">See Product</a>
        </button>
      </div>
      <img src={Headphone} alt="IMG" />
    </section>
  );
}

export default Hero;
