"use client";

import { useEffect, useState } from "react";

export default function CompState() {
  const [count, setCount] = useState<number>(0);
  const [click, setClick] = useState<number>(0);

  useEffect(() => {
    document.title = `you clicked ${click} times`;
    console.log(click);
  }, [click]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-6xl font-bold">{count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-teal-500 py-1 px-3 rounded-md"
        >
          decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-teal-500 py-1 px-3 rounded-md"
        >
          increment
        </button>
      </div>
      <button
        onClick={() => setClick(click + 1)}
        className="bg-blue-500 py-1 px-3 rounded-md"
      >
        click
      </button>
    </div>
  );
}
