import React from "react";
import iconShare from "../../images/icon-share.svg";
import iconQr from "../../images/icon-qr.svg";

const Actions = ({ quest }) => {
  return (
    <div className="quest__actions">
      <button className="quest__action quest__action--pk">
        <img
          src={iconQr}
          alt="Private key"
          title="Show private key"
          className="quest__action__icon"
          rel="preload"
        />
        Private key
      </button>
      <button className="quest__action quest__action--pk">
        <img
          src={iconShare}
          alt="Share quest"
          title="Click to copy quest link"
          className="quest__action__icon"
          rel="preload"
        />
        Share quest
      </button>
    </div>
  );
};
export default Actions;
