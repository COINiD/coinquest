import React from "react";

const Riddles = ({ riddles }) => {
  const renderRiddle = (riddle, index) => (
    <div className="quest__riddle">
      <div className="quest__riddle__image" />
      <h3 className="quest__riddle__title">
        Riddle <span className="quest__riddle__title__no">no.</span>
        {index + 1}
      </h3>
      {riddle === null && <p className="quest__riddle__unknown">Coming soon</p>}
    </div>
  );
  return (
    <div className="quest__riddles">
      {riddles.map((riddle, index) => renderRiddle(riddle, index))}
    </div>
  );
};
export default Riddles;
