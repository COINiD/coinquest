import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <h2 className="footer__title">Instructions</h2>
      <p className="footer__copy">
        1. Each quest includes a number of riddles. Follow this page or{" "}
        <a href="https://twitter.com/coinidgroup">COINiD on Twitter</a> to learn
        when new quest and riddles is published.
      </p>
      <p className="footer__copy">
        2. The riddles in a quest will make up a password that you can use on
        the quests private key to solve it.
      </p>
      <p className="footer__copy">
        3. Use the sweep functionality of your wallet of choice, the wallet must
        be able to sweep private keys with Bech32 addresses. We recommend{" "}
        <a href="https://coinid.org/#download-now" target="_blank">
          COINiD mobile wallet
        </a>{" "}
        which supports sweep private key of Bech32 addresses.
      </p>
      <p className="footer__copy">
        4. If the password is correct the coins available in the quest will be
        directly transferred to your wallet.
      </p>
    </div>
  </footer>
);
export default Footer;
