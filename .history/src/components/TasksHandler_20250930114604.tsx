import { useState } from "react";
import "../styles/components/TasksHandler.css";
import { v4 as uuidv4 } from "uuid";

export default function TasksHandler({ onAdd }) {
  const [isActive, setIsActive] = useState<"all" | "todo" | "completed">("all");
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({
      id: uuidv4(),
    });
  };

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
      <form id="taskForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          id="taskNameInput"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" id="createTaskBtn">
          Add Task
        </button>
      </form>
    </div>
  );
}
