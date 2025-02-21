"use client";

import { useMemo, useState } from "react";

export default function CompMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => setNumber(number + 1);
  const incrementCount = () => setCount(count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 == 0;
  }, [number]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={incrementNumber}
        className="bg-blue-500 py-1 px-3 rounded-md"
      >
        number: {number}
      </button>

      <div>{isNumberEven ? "Number Even" : "Number Odd"}</div>

      <button
        onClick={incrementCount}
        className="bg-blue-500 py-1 px-3 rounded-md"
      >
        count: {count}
      </button>
    </div>
  );
}
