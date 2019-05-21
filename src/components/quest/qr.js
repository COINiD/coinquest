import React from "react";
const Qr = ({ id }) => (
  <div className="quest__qr">
    <img src={require(`../../images/quests/q${id}qr.svg`)} />
  </div>
);

export default Qr;
