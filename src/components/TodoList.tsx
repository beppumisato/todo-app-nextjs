import { Task } from "@/types";
import React, { useEffect } from "react";
import Todo from "./Todo";

interface TodoListPropos{
    todos: Task[];
}

const TodoList = ({ todos }: TodoListPropos) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
        ))}
        </ul>
    );
};

export default TodoList;