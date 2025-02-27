import TodoServer from "@/components/server/todo";
import Todo from "@/components/todo";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <Todo />
      <TodoServer />
    </div>
  );
}
