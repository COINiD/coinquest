import React from "react";
import Quest from "./quest";

const QuestList = ({ title, quests, completed }) => (
  <section className={`quest-list ${completed && "quest-list--completed"}`}>
    <h3 className="quest-list__title">{title}</h3>
    {quests.map(quest => (
      <Quest quest={quest} key={quest.id} completed={completed} />
    ))}
  </section>
);
export default QuestList;
