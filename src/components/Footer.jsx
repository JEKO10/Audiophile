import React from "react";
import Logo from "../images/logo.svg";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <img src={Logo} alt="Logo" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="links">
          <ul className="pages">
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/" target="__blank">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="__blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="__blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
