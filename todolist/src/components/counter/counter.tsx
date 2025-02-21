"use client";

import { decrement, increment } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[80vh]">
      <h1 className="text-3xl">{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="p-3 bg-teal-400 rounded-md mx-2"
      >
        decrement
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="p-3 bg-teal-400 rounded-md mx-2"
      >
        increment
      </button>
    </div>
  );
}
