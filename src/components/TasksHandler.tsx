import { useState } from "react";
import "../styles/components/TasksHandler.css";
import useTasksHook from "../hooks/useTasksHook";

type Filter = "all" | "todo" | "completed";

type Props = {
  filter: Filter;
  onFilterChange: (f: Filter) => void;
};

export default function TasksHandler({ filter, onFilterChange }: Props) {
  const [text, setText] = useState("");
  const { addTask } = useTasksHook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    try {
      await addTask(value);
      setText("");
    } catch (err) {
      console.error("addTask error:", err);
    }
  };

  return (
    <div id="tasksHandler">
      <div id="tasksFilters">
        <button
          type="button"
          className={`filterBtn ${filter === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
        >
          All Tasks
        </button>
        <button
          type="button"
          className={`filterBtn ${filter === "todo" ? "active" : ""}`}
          onClick={() => onFilterChange("todo")}
        >
          To Complete
        </button>
        <button
          type="button"
          className={`filterBtn ${filter === "completed" ? "active" : ""}`}
          onClick={() => onFilterChange("completed")}
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
