import React from "react";
import Actions from "./quest/actions";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";

const Quest = ({ quest, completed }) => {
  const { description, title, reward, ticker, riddles } = quest;

  return (
    <div className="quest">
      <h2 className="quest__title">{title}</h2>
      <Reward completed={completed} reward={reward} ticker={ticker} />
      <p className="quest__description">{description}</p>
      <Actions quest={quest} />
      <Riddles quest={riddles} />
    </div>
  );
};
export default Quest;
