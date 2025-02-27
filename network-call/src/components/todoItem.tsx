import { ITodo } from "@/app/type";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

interface IProps {
  todo: ITodo;
  deleteTodo: (objectId: string) => void;
  doneTodo: (objectId: string, isChecked: boolean) => void;
}

export default function TodoItem({ todo, deleteTodo, doneTodo }: IProps) {
  const router = useRouter();
  return (
    <div className="group cursor-pointer flex items-center justify-between p-4 text-xl bg-white dark:bg-gray-200 transition">
      <span
        onClick={() => router.push(`/${todo.objectId}`)}
        className={`${todo.isChecked && "line-through text-gray-500"}`}
      >
        {todo.desc}
      </span>
      <div className="flex gap-3 items-center">
        <input
          checked={todo.isChecked}
          onChange={() => doneTodo(todo.objectId, todo.isChecked)}
          type="checkbox"
          className="w-5 h-5 accent-teal-400"
        />
        <MdDeleteOutline
          onClick={() => deleteTodo(todo.objectId)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
}
