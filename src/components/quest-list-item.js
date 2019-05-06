import React, { PureComponent } from "react";
import classnames from "classnames";
import Reward from "./quest/reward";

export default class QuestListItem extends PureComponent {
  render() {
    let { quest } = this.props;
    let { id, description, title, reward, ticker } = quest;

    let classes = classnames("quest", `quest--${id}`);

    return (
      <div className={classes} id={`quest-${id}`}>
        <h2 className="quest__title">{title}</h2>
        <Reward reward={reward} ticker={ticker} />
        <p className="quest__description">{description}</p>
      </div>
    );
  }
}
