import React from "react";

function SplitIntervalItem({ intervalData, handleBtnXClick }) {
  const { id, time, ranking, name } = intervalData;
  return (
    <li className="list-item">
      <span className="ranking">#{ranking}</span>
      <span className="time">{time}</span>
      <span className="interval-name">{name}</span>
      <button
        className="btn-remove-interval"
        onClick={() => {
          handleBtnXClick(id);
        }}
      >
        x
      </button>
    </li>
  );
}

export default SplitIntervalItem;
