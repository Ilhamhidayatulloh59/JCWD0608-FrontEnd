import { ITodo } from "@/app/type";
import { MdDeleteOutline } from "react-icons/md";

interface IProps {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  doneTodo: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo, doneTodo }: IProps) {
  return (
    <div className="group flex items-center justify-between p-4 text-xl bg-white dark:bg-gray-200 transition">
      <span className={`${todo.isChecked && "line-through text-gray-500"}`}>
        {todo.desc}
      </span>
      <div className="flex gap-3 items-center opacity-0 group-hover:opacity-100">
        <input
          checked={todo.isChecked}
          onChange={() => doneTodo(todo.id)}
          type="checkbox"
          className="w-5 h-5 accent-teal-400"
        />
        <MdDeleteOutline
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:animate-[spin_0.5s_linear] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        />
      </div>
    </div>
  );
}
