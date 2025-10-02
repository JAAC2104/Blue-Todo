import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import Statistics from "../components/Statistics";
import TasksHandler from "../components/TasksHandler";
import "../styles/pages/MainPage.css";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "../types/Todo";

export default function MainPage() {
  const initialTodo: Todo[] = [
    {
      id: uuidv4(),
      text: "grocery shopping",
      status: "active",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: uuidv4(),
      text: "watching movie",
      status: "active",
      timestamp: new Date().toLocaleString(),
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodo);
  const handleAdd = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDelete = (deleted: Todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <>
      <Navbar />
      <div id="tasksMenu">
        <Statistics />
        <TasksHandler onAdd={handleAdd} />
        { if(todos.length < 1 ) {
<p>nothing</p>} else {
        <TaskList todos={todos} onDelete={handleDelete} />
}}
        </div>
    </>
  );
}
