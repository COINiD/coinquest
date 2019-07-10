import React, { PureComponent } from "react";
import classnames from "classnames";
import { coinNames, coinUrls, insights } from "../config/constants";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";
import FiatValue from "./quest/fiat-value";
import Qr from "./quest/qr";
import WalletButton from "./wallet-button";

export default class QuestListItem extends PureComponent {
  render() {
    let { completed, quest, withRiddles, useFullDesc } = this.props;
    let {
      address,
      id,
      description,
      fullDescription,
      title,
      reward,
      ticker,
      riddles
    } = quest;
    let prizeUrl = insights[ticker];
    let url = prizeUrl + "/address/" + address;
    let classes = classnames("quest", `quest--${id}`, `quest--${ticker}`);
    let coinUrl = `https://${coinUrls[ticker]}`;
    return (
      <div className={classes} id={`quest-${id}`}>
        <div className="quest__content">
          <div className="quest__header">
            <h2 className="quest__title">{title}</h2>
            <Qr id={id} />
          </div>
          <Reward reward={reward} ticker={ticker} completed={completed} />
          <FiatValue reward={reward} ticker={ticker} />
          <p className="quest__description">
            {useFullDesc ? fullDescription : description}
          </p>
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
          <div className="quest__coin">
            <img
              src={require("../images/coins/" + ticker + ".svg")}
              alt={coinNames[ticker]}
              className="quest__coin__logo"
            />
            <div className="quest__coin__name">
              <h4 className="quest__coin__title">Partnering coin</h4>
              <p className="quest__coin__link">
                {coinNames[ticker]}&nbsp;
                <a href={coinUrl} target="_blank" rel="noopener noreferrer">
                  {coinUrls[ticker]}
                </a>
              </p>
            </div>
          </div>
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
