"use client";

import { ITodo } from "@/app/type";
import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import TodoItem from "./todoItem";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Todo() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { isDark, toggleDarkMode } = useDarkMode();

  const addTodo = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      const newTodo = inputRef.current.value;
      const maxId =
        todos.length == 0 ? 0 : Math.max(...todos.map((item) => item.id));
      setTodos([...todos, { id: maxId + 1, desc: newTodo, isChecked: false }]);
      inputRef.current.value = "";
    } else {
      alert("Input wajib diisi");
    }
  };

  const deleteTodo = (id: number) => {
    const idx = todos.findIndex((item) => item.id == id);
    const copyTodos = [...todos];
    copyTodos.splice(idx, 1);
    setTodos(copyTodos);
  };

  const doneTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return { ...todo };
    });
    setTodos(newTodos);
  };
  return (
    <div className="mt-28 w-[90%] md:w-full md:max-w-[500px] rounded-lg overflow-hidden h-fit">
      <div className="flex justify-center py-8 bg-red-400 dark:bg-gray-400 text-white font-light text-4xl relative">
        TO-DO LIST
        <button
          onClick={toggleDarkMode}
          className="absolute text-xl top-4 right-4"
        >
          {isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
      <div className="flex bg-orange-300 dark:bg-gray-300">
        <input
          ref={inputRef}
          className="w-full p-4 text-xl outline-none bg-orange-300 dark:bg-gray-300 focus:border-none focus:ring-0"
          placeholder="Add a new task here..."
        />
        <button onClick={addTodo} className="p-4 text-xl font-extrabold">
          <IoMdAdd />
        </button>
      </div>
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
