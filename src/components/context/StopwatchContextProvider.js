import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";
import { initialState, reducerFunc } from "../../services";

const StopwatchContext = createContext();

function StopwatchContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [splitIntervals, setSplitIntervals] = useState([]);
  const [paused, setPaused] = useState(true);
  const [started, setStarted] = useState(false);
  const checkboxRef = useRef();
  return (
    <StopwatchContext.Provider
      value={{
        state,
        dispatch,
        splitIntervals,
        setSplitIntervals,
        paused,
        setPaused,
        started,
        setStarted,
        checkboxRef,
      }}
    >
      {children}
    </StopwatchContext.Provider>
  );
}

export const useStopwatchContext = () => useContext(StopwatchContext);

export default StopwatchContextProvider;
