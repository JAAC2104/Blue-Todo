import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/components/TodoList.css";

type Todo = {
  id: string;
  text: string;
  status: "pending" | "completed";
  timestamp: string;
};

export default function TaskList() {
  const initialTodo: Todo[] = [
    {
      id: uuidv4(),
      text: "grocery shopping",
      status: "pending",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: uuidv4(),
      text: "watching movie",
      status: "pending",
      timestamp: new Date().toLocaleString(),
    },
  ];

  const [todos, setTodos] = useState(initialTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list">
          <div className="todo-left">
            <input type="checkbox" />
            <span className="todo-text">{todo.text}</span>
          </div>
          <div className="todo-right">
            <span className="todo-timestamp">{todo.timestamp}</span>
            <button className="deleteBtn">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
