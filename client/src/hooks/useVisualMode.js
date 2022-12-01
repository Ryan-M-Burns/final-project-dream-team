import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const newHistory = [...history];
  //defines initial state and state data types

  //function to transition between views, if replace is true the previous view will not be added to the history array. 
  const transition = function (newMode, replace = false) {
    if (!replace) {
      newHistory.push(mode);
      setHistory((prev) => [...prev, newMode]);
      setMode(newMode);
    }
    newHistory[newHistory.length - 1] = mode;
    setHistory((prev) => [...prev])
    setMode(newMode)
  };

  //function to switch to previous visual state, it transition was made with replace = true, will skip the immediately previous render
  const back =() => {
    if (history.length > 1) {
      const newHistory = [...history].slice(0, -1);
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
};