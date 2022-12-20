import React from "react";
import { handleCheckboxClick } from "../services/handlers";
import ButtonsWrapper from "./ButtonsWrapper";
import { useStopwatchContext } from "./context/StopwatchContextProvider";
import SplitIntervalsList from "./SplitIntervalsList";
import SquaresContainer from "./SquaresContainer";

function StopwatchBody() {
  const { setSplitIntervals, checkboxRef } = useStopwatchContext();
  return (
    <div className="stopwatch-container">
      <SquaresContainer />
      <ButtonsWrapper />
      <input
        type="checkbox"
        id="reverse-order"
        onChange={(e) => {
          handleCheckboxClick(e, checkboxRef, setSplitIntervals);
        }}
      />
      <label htmlFor="reverse-order">reverse order</label>
      <SplitIntervalsList />
    </div>
  );
}

export default StopwatchBody;
