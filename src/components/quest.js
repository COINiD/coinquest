import React, { PureComponent } from "react";
import classnames from "classnames";
import { coinNames } from "../config/constants";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";
import Qr from "./quest/qr";
import WalletButton from "./wallet-button";

export default class QuestListItem extends PureComponent {
  render() {
    let { completed, quest, withRiddles } = this.props;
    let { id, description, title, reward, ticker, privateKey, riddles } = quest;

    let classes = classnames("quest", `quest--${id}`, `quest--${ticker}`);

    return (
      <div className={classes} id={`quest-${id}`}>
        <div className="quest__content">
          <h2 className="quest__title">{title}</h2>
          <Reward reward={reward} ticker={ticker} completed={completed} />
          <p className="quest__description">{description}</p>
          {withRiddles && <Riddles riddles={riddles} />}
          <p className="quest__side quest__side--mobile">
            <Qr privateKey={privateKey} />
            Private key
          </p>
          <h4 className="quest__download-title">
            Download {coinNames[ticker]} Wallet
          </h4>
          <div className="quest__download">
            <WalletButton ticker={ticker} system="android" />
            <WalletButton ticker={ticker} system="ios" />
          </div>
        </div>
        <p className="quest__side quest__side--desktop">
          <Qr privateKey={privateKey} />
          Private key
        </p>
      </div>
    );
  }
}
