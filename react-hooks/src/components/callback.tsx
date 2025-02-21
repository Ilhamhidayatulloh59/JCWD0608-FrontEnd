"use client";

import { useCallback, useState } from "react";
import Todos from "./todo";

export default function CompCallback() {
  const [count, setCount] = useState<number>(0);
  const [todo, setTodo] = useState<string[]>([]);

  const increment = () => setCount(count + 1);
  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "New Todo"]);
  }, [todo]);

  return (
    <div>
      <Todos todos={todo} addTodo={addTodo} />
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}> increment </button>
      </div>
    </div>
  );
}
