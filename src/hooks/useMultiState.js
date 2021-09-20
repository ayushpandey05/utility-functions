import { useState, useEffect, useRef } from "react";

const useMultiState = (initialState = {}) => {
  const [state, setNewState] = useState(initialState);
  const callbackRef = useRef(false);
  const setState = (newStateData, callbackfn) => {
    callbackRef.current = callbackfn;
    const newState = { ...state, ...newStateData };
    setNewState(newState);
  };
  useEffect(() => {
    if (typeof callbackRef.current === "function") {
      callbackRef.current();
      callbackRef.current = false;
    }
  }, [state]);
  return [state, setState];
};

export default useMultiState;
