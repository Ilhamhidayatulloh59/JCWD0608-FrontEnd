import { ITodo } from "@/app/type";
import TodoItem from "./todoItem";
import { getTodo } from "@/app/action";

export default async function TodoServer() {
  const todos: ITodo[] = await getTodo();
  return (
    <div className="mt-28 w-[90%] md:w-full md:max-w-[500px] rounded-lg overflow-hidden h-fit">
      <div className="flex justify-center py-8 bg-red-400 dark:bg-gray-400 text-white font-light text-4xl relative">
        TO-DO LIST SERVER
      </div>
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
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
