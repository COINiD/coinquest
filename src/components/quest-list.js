import React from "react";
import QuestListItem from "./quest-list-item";

const QuestList = ({ title, quests }) => {
  return (
    <section className="quest-list">
      <h3 className="quest-list__title">{title}</h3>
      {quests.map(quest => (
        <QuestListItem quest={quest} key={quest.id} />
      ))}
    </section>
  );
};
export default QuestList;
