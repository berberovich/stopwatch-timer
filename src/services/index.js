export const startStopwatch = (dispatch, state) => {
  state.timerIdForMilliseconds = setInterval(() => {
    dispatch({ type: "increase Milliseconds", payload: { dispatch } });
  }, 1);
};

export const increaseNumber = (time, x, dispatch) => {
  if (time === x) {
    dispatch({ type: "increase Minutes", payload: { dispatch } });
    return "00";
  }
  if (time[1] === "9") {
    return `${+time[0] + 1}0`;
  }

  return `${time[0]}${+time[1] + 1}`;
};

export const increaseMilliseconds = (time, x, dispatch) => {
  if (time === x) {
    dispatch({ type: "increase Seconds", payload: { dispatch } });
    return "000";
  }

  if (time[2] === "9" && time[1] === "9") {
    return `${+time[0] + 1}00`;
  }
  if (time[2] === "9") {
    return `${time[0]}${+time[1] + 4}0`;
  }

  return `${time[0]}${time[1]}${+time[2] + 1}`;
};

export const initialState = {
  hour: "00",
  milliSeconds: "000",
  seconds: "00",
  minutes: "00",
  timerIdForMilliseconds: null,
};

export const clearTimers = (state) => {
  console.log(state);
  clearInterval(state.timerIdForMilliseconds);
};

export const reducerFunc = (state, action) => {
  const { type, payload } = action;
  const { dispatch } = payload;
  switch (type) {
    case "increase Milliseconds": {
      return {
        ...state,
        milliSeconds: increaseMilliseconds(state.milliSeconds, "999", dispatch),
      };
    }
    case "increase Seconds": {
      const target = type.split(" ")[1].toLowerCase();
      return {
        ...state,
        seconds: increaseNumber(state[target], "59", dispatch),
      };
    }
    case "increase Minutes": {
      return {
        ...state,
        minutes: increaseNumber(state.minutes, "59", dispatch),
      };
    }

    case "clearTimers": {
      clearTimers(state);
      return {
        ...state,
      };
    }

    case "reset": {
      clearTimers(state);
      return {
        hour: "00",
        milliSeconds: "000",
        seconds: "00",
        minutes: "00",
        timerIdForMilliseconds: null,
      };
    }
    default: {
      return state;
    }
  }
};
