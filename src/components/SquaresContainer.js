import React from "react";
import { useStopwatchContext } from "./context/StopwatchContextProvider";
import Square from "./Square";

function SquaresContainer() {
  const { state } = useStopwatchContext();
  const { milliSeconds, minutes, seconds, hour } = state;
  return (
    <div className="flex">
      <Square time={hour} className="number" />
      <span style={{ fontSize: "7.5em" }}>:</span>

      <Square time={minutes} className="number" />
      <span style={{ fontSize: "7.5em" }}>:</span>
      <Square time={seconds} className="number" />
      <span style={{ fontSize: "7.5em" }}>.</span>
      <Square time={milliSeconds} className="number small" />
    </div>
  );
}

export default SquaresContainer;
