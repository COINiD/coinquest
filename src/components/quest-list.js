import React from "react";
import Quest from "./quest";

const QuestList = ({ quests, withRiddles, useFullDesc }) => {
  return (
    <section className="quest-list">
      {quests.map(quest => (
        <Quest
          quest={quest}
          key={quest.id}
          withRiddles={withRiddles}
          useFullDesc={useFullDesc}
        />
      ))}
    </section>
  );
};
export default QuestList;
