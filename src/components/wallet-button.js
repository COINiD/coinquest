import React from "react";
import { walletUrls } from "../config/constants";
import iconIos from "../images/icon-app-store.svg";
import iconAndroid from "../images/icon-play-store.svg";

const WalletButton = ({ ticker, system }) => {
  let title = "Download the apps";

  if (ticker === undefined) {
    ticker = "ALL";
  } else {
    title = system === "android" ? "Google Play" : "App Store";
  }

  let { android: urlAndroid, ios: urlIos } = walletUrls[ticker];

  let icon = system === "android" ? iconAndroid : iconIos;
  let url = system === "android" ? urlAndroid : urlIos;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wallet-btn"
    >
      {title}
      <img
        src={icon}
        alt={title}
        title={`Visit ${title}`}
        className="wallet-btn__icon"
        rel="preload"
      />
    </a>
  );
};

export default WalletButton;
