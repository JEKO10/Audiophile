import React from "react";
import Speaker from "../images/image-product-speaker.jpg";
import Headphone from "../images/image-xx99-mark-one.jpg";
import Earphone from "../images/image-yx1-earphones.jpg";

function Recommendation() {
  return (
    <section className="recommend">
      <div className="headphones">
        <img src={Headphone} alt="IMG" />
        <h1>Headphones</h1>
      </div>
      <div className="headphones">
        <img src={Speaker} alt="IMG" />
        <h1>Speakers</h1>
      </div>
      <div className="headphones">
        <img src={Earphone} alt="IMG" />
        <h1>Earphones</h1>
      </div>
    </section>
  );
}

export default Recommendation;
