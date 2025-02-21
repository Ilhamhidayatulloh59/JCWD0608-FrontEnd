"use client";

import { useReducer } from "react";

const actionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

interface CountAction {
  type: string;
  payload: number;
}

interface CountState {
  count: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { count: state.count + action.payload };
    case actionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default function CompReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => dispatch({ type: "increment", payload: 1 });
  const decrement = () => dispatch({ type: "decrement", payload: 1 });

  return (
    <div>
      <button onClick={decrement}> - </button>
      <div>Count : {state.count}</div>
      <button onClick={increment}> + </button>
    </div>
  );
}
