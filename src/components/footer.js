import React from "react";
import WalletButton from "../components/wallet-button";
import logo from "../images/coinid-logo.svg";
import footerBg from "../images/footer-bg.png";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <h2 className="footer__title">Instructions</h2>
      <ol className="footer__list">
        <li className="footer__list-item">
          Each quest includes a number of riddles. Follow this page or{" "}
          <a href="https://twitter.com/coinidgroup">COINiD on Twitter</a> to
          learn when new quest and riddles is published.
        </li>
        <li className="footer__list-item">
          Download and{" "}
          <a href="https://coinid.org/guides/hot-wallet">
            setup a COINiD wallet
          </a>{" "}
          for the quests coin.
        </li>
        <li className="footer__list-item">
          Go to receive in the wallet app and select <i>Sweep private key</i>{" "}
          and scan QR code for the quest.
        </li>
        <li className="footer__list-item">
          Hint will lead you to a quest page where you find the riddles.
        </li>
        <li className="footer__list-item">
          Solve the riddles to get the password
        </li>
      </ol>
      <p className="footer__downloads">
        <WalletButton system="ios" />
        <WalletButton system="android" />
      </p>
      <a href="https://coinid.org" className="footer__logo">
        <img src={logo} alt="COINiD Logo" title="Visit COINiD.org" />
      </a>
      <img
        src={footerBg}
        alt="iPhone with apps"
        title="iPhone with apps"
        className="footer__bg"
      />
    </div>
  </footer>
);
export default Footer;
