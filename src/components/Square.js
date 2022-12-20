import React from "react";

function Square({ time, ...otherProps }) {
  return (
    // <div className="square">
    <span {...otherProps}>{time}</span>
    /* </div> */
  );
}

export default Square;
