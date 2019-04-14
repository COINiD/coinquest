import React from "react";
import classnames from "classnames";
import Quest from "./quest";

const QuestList = ({ title, quests, completed }) => {
  let classes = classnames("quest-list", {
    "quest-list--completed": completed
  });
  return (
    <section className={classes}>
      <h3 className="quest-list__title">{title}</h3>
      {quests.map(quest => (
        <Quest quest={quest} key={quest.id} completed={completed} />
      ))}
    </section>
  );
};
export default QuestList;
