import { useState } from "react";
import "../styles/components/TasksHandler.css";

export default function TasksHandler({ onAdd }) {
  const [isActive, setIsActive] = useState<"all" | "todo" | "completed">("all");

  return (
    <div id="tasksHandler">
      <div id="tasksFilters">
        <button
          className={`filterBtn ${isActive === "all" ? "active" : ""}`}
          onClick={() => setIsActive("all")}
        >
          All Tasks
        </button>
        <button
          className={`filterBtn ${isActive === "todo" ? "active" : ""}`}
          onClick={() => setIsActive("todo")}
        >
          To Complete
        </button>
        <button
          className={`filterBtn ${isActive === "completed" ? "active" : ""}`}
          onClick={() => setIsActive("completed")}
        >
          Completed
        </button>
      </div>
      <div id="taskForm">
        <input type="text" placeholder="Add a new task..." id="taskNameInput" />
        <button type="submit" id="createTaskBtn">
          Add Task
        </button>
      </div>
    </div>
  );
}
