import React from "react";
import { QRCode } from "react-qr-svg";

const Qr = ({ privateKey }) => (
  <a href={`coinid://sweep/${privateKey}`} className="quest__qr">
    <QRCode
      cellClassPrefix="quest__qr-"
      level="L"
      style={{ width: 168 }}
      value={privateKey}
    />
  </a>
);

export default Qr;
