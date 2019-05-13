import React from "react";
import Quest from "./quest";

const QuestList = ({ title, quests, withRiddles }) => {
  return (
    <section className="quest-list">
      <h3 className="quest-list__title">{title}</h3>
      {quests.map(quest => (
        <Quest quest={quest} key={quest.id} withRiddles={withRiddles} />
      ))}
    </section>
  );
};
export default QuestList;
