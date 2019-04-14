import React from "react";
import logo from "../images/coinid-white.svg";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <h2 className="footer__title">Instructions</h2>
      <p className="footer__copy">
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </p>
      <p className="footer__copy">
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor.
      </p>
      <p className="footer__copy">
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </p>
      <p className="footer__copy">
        4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor.
      </p>
      <a href="https://coinid.org" target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt="COINiD"
          title="Visit coinid.org"
          className="footer__logo"
          rel="preload"
        />
      </a>
    </div>
  </footer>
);
export default Footer;
