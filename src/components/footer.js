import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <h2 className="footer__title">Instructions</h2>
      <p className="footer__copy">
        1. Each quest includes a number of riddles. Follow this page or COINiD
        on Twitter to learn when new quest and riddles is published.
      </p>
      <p className="footer__copy">
        2. All riddles will make up a password that you can use on the private
        key.
      </p>
      <p className="footer__copy">
        3. Use the sweep functionality of your wallet of choice. The private key
        is a BECH32 address.
      </p>
      <p className="footer__copy">
        4. If the password is correct the coins available in the quest will be
        directly transferred to your wallet.
      </p>
    </div>
  </footer>
);
export default Footer;
