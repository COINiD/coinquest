import React from "react";

const Riddles = ({ riddles }) => {
  const renderRiddle = (riddle, index) => {
    return (
      <a className="quest__riddle" href="#">
        <div className="quest__riddle__image">
          {riddle && riddle.image && (
            <img src={require(`../../images/quests/${riddle.image}`)} />
          )}
        </div>
        <h3 className="quest__riddle__title">
          Riddle <span className="quest__riddle__title__no">no.</span>
          {index + 1}
        </h3>
        {riddle === null && (
          <p className="quest__riddle__unknown">Coming soon</p>
        )}
      </a>
    );
  };
  return (
    <div className="quest__riddles">
      {riddles.map((riddle, index) => renderRiddle(riddle, index))}
    </div>
  );
};
export default Riddles;
