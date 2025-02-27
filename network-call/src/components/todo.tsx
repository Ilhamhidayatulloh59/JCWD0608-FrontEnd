"use client";

import { ITodo } from "@/app/type";
import { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import axios from "axios";
import TodoForm from "./todoForm";
import { tagRevalidate } from "@/app/action";

export default function Todo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const onReload = () => setReload(!reload);

  const deleteTodo = async (objectId: string) => {
    try {
      await axios.delete(
        `https://snazzyfoot-us.backendless.app/api/data/todo/${objectId}`
      );
      onReload();
      tagRevalidate("todo");
      // setTodos((prev) => prev.filter((item) => item.objectId !== objectId));
    } catch (err) {
      console.log(err);
    }
  };

  const doneTodo = async (objectId: string, isChecked: boolean) => {
    try {
      await axios.put(
        `https://snazzyfoot-us.backendless.app/api/data/todo/${objectId}`,
        { isChecked: !isChecked }
      );
      tagRevalidate("todo");
      onReload();
      // setTodos((prev) =>
      //   prev.map((todo) =>
      //     todo.objectId == objectId ? { ...todo, isChecked: !isChecked } : todo
      //   )
      // );
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://snazzyfoot-us.backendless.app/api/data/todo?sortBy=%60id%60%20asc"
      );
      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="mt-28 w-[90%] md:w-full md:max-w-[500px] rounded-lg overflow-hidden h-fit">
      <div className="flex justify-center py-8 bg-red-400 dark:bg-gray-400 text-white font-light text-4xl relative">
        TO-DO LIST
      </div>
      <TodoForm onReload={onReload} />
      <div>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
          />
        ))}
      </div>
      <div className="flex justify-evenly py-4 bg-red-400 dark:bg-gray-400 text-white">
        <p>Total: {todos.length} Task</p>
        <p>
          Done: {todos.filter((item) => item.isChecked == true).length} Task
        </p>
      </div>
    </div>
  );
}
