import React from "react";
import Speaker from "../images/image-speaker-zx9.png";
import Earphone from "../images/image-earphones-yx1.jpg";

function Collage() {
  return (
    <section className="collage">
      <div className="first">
        <img src={Speaker} alt="IMG" />
        <div>
          <h1>
            ZX9 <br /> Speaker
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button>See Product</button>
        </div>
      </div>
      <div className="second">
        <h1>ZX7 SPEAKER</h1>
        <button>See Product</button>
      </div>
      <div className="third">
        <img src={Earphone} alt="IMG" />
        <div>
          <h1>YX1 EARPHONES</h1>
          <button>See Product</button>
        </div>
      </div>
    </section>
  );
}

export default Collage;
