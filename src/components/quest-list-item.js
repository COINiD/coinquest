import React, { PureComponent } from "react";
import classnames from "classnames";
import Reward from "./quest/reward";
import Qr from "./quest/qr";

export default class QuestListItem extends PureComponent {
  render() {
    let { quest } = this.props;
    let { id, description, title, reward, ticker, privateKey } = quest;

    let classes = classnames("quest", `quest--${id}`);

    return (
      <div className={classes} id={`quest-${id}`}>
        <div className="quest__content">
          <h2 className="quest__title">{title}</h2>
          <Reward reward={reward} ticker={ticker} />
          <p className="quest__description">{description}</p>
        </div>
        <div className="quest__side">
          <Qr privateKey={privateKey} />
          <h5>Private key</h5>
        </div>
      </div>
    );
  }
}
