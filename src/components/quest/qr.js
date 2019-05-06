import React from "react";
import { QRCode } from "react-qr-svg";

const Qr = ({ privateKey }) => (
  <div className="quest__qr">
    <QRCode
      cellClassPrefix="quest__qr-"
      level="Q"
      style={{ width: 168 }}
      value={`coinid://sweep/${privateKey}`}
    />
  </div>
);

export default Qr;
