import React from "react";
import { useStopwatchContext } from "./context/StopwatchContextProvider";
import SplitIntervalItem from "./SplitIntervalItem";

function SplitIntervalsList() {
  const { splitIntervals, setSplitIntervals } = useStopwatchContext()
  const handleBtnXClick = (id) => {
    setSplitIntervals((prevIntervals) => {
      const splitIntervalsClone = [...prevIntervals];
      return splitIntervalsClone
        .filter((interval) => interval.id !== id)
        .map((interval, i) => {
          interval.ranking = i + 1;
          return interval;
        });
    });
  };
  return (
    <ul>
      {splitIntervals.map((intervalData) => {
        return (
          <SplitIntervalItem
            key={intervalData.id}
            intervalData={intervalData}
            handleBtnXClick={handleBtnXClick}
          />
        );
      })}
    </ul>
  );
}

export default SplitIntervalsList;
