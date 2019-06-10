import React from "react";
const Qr = ({ id }) => (
  <div className="quest__qr">
    <img
      src={require(`../../images/quests/q${id}qr.svg`)}
      alt="private key"
      title="Scan with COINiD Wallet"
    />
  </div>
);

export default Qr;
