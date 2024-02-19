import { getAllTodos } from "@/api";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default async function Home() {
  // const todos = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-orange-100">
      <h1 className="text-4xl font-bold text-orange-700 mt-20">
        Nextjs 13 Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          {/* <TodoList todos={todos} /> */}
        </div>
      </div>
    </main>
  );
}
