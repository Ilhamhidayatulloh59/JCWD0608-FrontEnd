"use client";

import { memo } from "react";

interface ITodos {
  todos: string[];
  addTodo: () => void;
}

const Todos = ({ todos, addTodo }: ITodos) => {
  console.log("child render");

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, idx) => {
        return <p key={idx}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
