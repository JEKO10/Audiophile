import React from "react";
import AboutImg from "../images/image-about.jpg";

function About() {
  return (
    <section className="about">
      <div>
        <h1>Bringing You The Best Audio Gear</h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={AboutImg} alt="IMG" />
    </section>
  );
}

export default About;
