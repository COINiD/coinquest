import React from "react";
import classnames from "classnames";
import Actions from "./quest/actions";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";

const Quest = ({ quest, completed }) => {
  const { id, description, title, reward, ticker, riddles } = quest;

  let classes = classnames("quest", `quest--${id}`, {
    "quest--completed": completed
  });

  return (
    <div className={classes}>
      <h2 className="quest__title">{title}</h2>
      <Reward completed={completed} reward={reward} ticker={ticker} />
      <p className="quest__description">{description}</p>
      <Actions quest={quest} />
      <Riddles riddles={riddles} />
    </div>
  );
};
export default Quest;
