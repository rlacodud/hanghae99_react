
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;