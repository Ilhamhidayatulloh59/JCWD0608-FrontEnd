"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Counter2() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1 className="text-4xl">{count}</h1>
    </div>
  );
}
