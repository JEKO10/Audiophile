import React from "react";
import Logo from "../images/logo.svg";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Logo" />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <ul>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
