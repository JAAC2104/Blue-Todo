import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import Statistics from "../components/Statistics";
import TasksHandler from "../components/TasksHandler";
import "../styles/pages/MainPage.css";
import type { Todo } from "../types/Todo";
import useTodos from "../hooks/useTodos";

export default function MainPage() {
  const { todos, handleAdd, handleUpdate, handleDelete } = useTodos();
  const [filter, setFilter] = useState<"all" | "todo" | "completed">("all");

  const filtered = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  return (
    <>
      <Navbar />
      <div id="tasksMenu">
        <Statistics todos={todos} />
        <TasksHandler onAdd={handleAdd} setFilter={setFilter} />
        {todos.length < 1 ? (
          <p id="noListStatement"> You don’t have any items in the list yet.</p>
        ) : (
          filtered.map((todo) => (
            <TaskList
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        )}
      </div>
    </>
  );
}
