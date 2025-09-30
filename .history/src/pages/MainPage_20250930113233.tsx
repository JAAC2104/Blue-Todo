import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import Statistics from "../components/Statistics";
import "../styles/pages/MainPage.css";
import TasksHandler from "../components/TasksHandler";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Todo = {
  id: string;
  text: string;
  status: "pending" | "completed";
  timestamp: string;
};

export default function MainPage() {
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
    <>
      <Navbar />
      <div id="tasksMenu">
        <Statistics />
        <TasksHandler />
        <TaskList todos={todos} />
      </div>
    </>
  );
}
