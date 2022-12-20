import { useStopwatchContext } from "../../components/context/StopwatchContextProvider";

export const handleCheckboxClick = (e, checkboxRef, setSplitIntervals) => {
  const { checked } = e.target;
  checkboxRef.current = checked;
  setSplitIntervals((prevIntervals) => {
    console.log(prevIntervals);
    const intervalsClone = [...prevIntervals];

    return intervalsClone.reverse();
  });
};

export const handleBtnReset = (
  setPaused,
  dispatch,
  setSplitIntervals,
  setStarted
) => {
  setPaused(true);
  dispatch({
    type: "reset",
    payload: {
      dispatch,
    },
  });
  setSplitIntervals([]);
  setStarted(false);
};

export const handleBtnStart = (startStopwatch, setPaused, setStarted, dispatch, state) => {
  startStopwatch(dispatch, state);
  setPaused(false);
  setStarted(true);
};
