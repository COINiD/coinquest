import React from "react";

const Reward = ({ completed, ticker, reward }) => {
  const renderReward = (ticker, reward) => {
    return (
      <p className="quest__reward">
        {`First to complete gets `}
        <span className="quest__reward__value">
          {reward} {ticker}
        </span>
      </p>
    );
  };

  const renderCompleted = () => {
    return <p className="quest__reward">Reward is claimed</p>;
  };

  return completed ? renderCompleted() : renderReward(ticker, reward);
};
export default Reward;
