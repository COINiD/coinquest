import React, { PureComponent } from "react";
import classnames from "classnames";
import { coinNames, insights } from "../config/constants";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";
import Qr from "./quest/qr";
import WalletButton from "./wallet-button";

export default class QuestListItem extends PureComponent {
  render() {
    let { completed, quest, withRiddles } = this.props;
    let { address, id, description, title, reward, ticker, riddles } = quest;
    let prizeUrl = insights[ticker];
    let url = prizeUrl + "/address/" + address;
    let classes = classnames("quest", `quest--${id}`, `quest--${ticker}`);

    return (
      <div className={classes} id={`quest-${id}`}>
        <div className="quest__content">
          <div className="quest__header">
            <h2 className="quest__title">{title}</h2>
            <Qr id={id} />
          </div>
          <Reward reward={reward} ticker={ticker} completed={completed} />
          <p className="quest__description">{description}</p>
          {withRiddles && <Riddles riddles={riddles} />}
          <p className="quest__address">
            <span className="quest__address__title">Prize address: </span>
            <a
              href={url}
              className="quest__address__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </p>
          <div className="quest__download">
            <span className="quest__download__title">
              Download {coinNames[ticker]} Wallet
            </span>
            <WalletButton ticker={ticker} system="android" />
            <WalletButton ticker={ticker} system="ios" />
          </div>
        </div>
      </div>
    );
  }
}
