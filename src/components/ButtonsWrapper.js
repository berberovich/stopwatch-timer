import React from "react";
import { startStopwatch } from "../services";
import { handleBtnReset, handleBtnStart } from "../services/handlers";
import Button from "./Button";
import { useStopwatchContext } from "./context/StopwatchContextProvider";

function ButtonsWrapper() {
  const {
    state,
    dispatch,
    splitIntervals,
    setSplitIntervals,
    paused,
    setPaused,
    started,
    setStarted,
    checkboxRef,
  } = useStopwatchContext();
  let className = "circular";
  let classForBtnReset = "circular";
  let classForSplit = "circular";
  let btnText = "";
  let onClick = "";
  const handleBtnStop = () => {
    dispatch({
      type: "clearTimers",
      payload: {
        dispatch,
      },
    });
    setPaused(true);
    setSplitIntervals((prevIntervals) => {
      let id;
      if (checkboxRef.current) {
        id = splitIntervals.length + 1;
      } else {
        id = prevIntervals.at(-1)?.id + 1 || 0;
      }
      const newInterval = {
        id,
        time: `${state.hour}:${state.minutes}:${state.seconds}:${state.milliSeconds}`,
        ranking: prevIntervals.length + 1,
        name: "pause",
      };
      if (checkboxRef.current) {
        return [newInterval, ...prevIntervals];
      } else {
        return [...prevIntervals, newInterval];
      }
    });
  };

  const handleSplitClick = () => {
    setSplitIntervals((prevSplitIntervals) => {
      let id;
      if (checkboxRef.current) {
        id = splitIntervals.length + 1;
      } else {
        id = prevSplitIntervals.at(-1)?.id + 1 || 0;
      }
      const { milliSeconds, seconds, minutes, hour } = state;
      const newSplitInterval = {
        id,
        time: `${hour}:${minutes}:${seconds}.${milliSeconds}`,
        ranking: prevSplitIntervals.length + 1,
        name: "split",
      };

      if (checkboxRef.current) {
        return [newSplitInterval, ...prevSplitIntervals];
      } else {
        return [...prevSplitIntervals, newSplitInterval];
      }
    });
  };

  if (paused) {
    btnText = "start";
    onClick = () => {
      handleBtnStart(startStopwatch, setPaused, setStarted, dispatch, state);
    };
    className += " green";
    classForBtnReset += " reset";
    classForSplit += " not-allowed";
  } else {
    btnText = "pause";
    onClick = handleBtnStop;
    className += " red";
    classForBtnReset += " reset not-allowed";
    classForSplit += " split";
  }

  if (!started) {
    classForBtnReset += " not-allowed";
  }
  return (
    <div className="buttons-container">
      <Button text={btnText} onClick={onClick} className={className} />
      <Button
        text="Split"
        style={{ color: "black", border: "1px solid black" }}
        disabled={paused}
        className={classForSplit}
        onClick={handleSplitClick}
      />
      <Button
        text="reset"
        onClick={() => {
          handleBtnReset(setPaused, dispatch, setSplitIntervals, setStarted);
        }}
        className={classForBtnReset}
        disabled={!paused || !started}
      />
    </div>
  );
}

export default ButtonsWrapper;
