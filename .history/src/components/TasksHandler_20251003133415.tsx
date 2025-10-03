import { useState } from "react";
import "../styles/components/TasksHandler.css";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "../types/Todo";
import TaskFilters from "./TaskFilters";

type TasksHandlerProps = {
  onAdd: (todo: Todo) => void;
  setFilter: React.Dispatch<React.SetStateAction<"all" | "todo" | "completed">>;
};

export default function TasksHandler({ onAdd, setFilter }: TasksHandlerProps) {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({
      id: uuidv4(),
      text,
      status: "todo",
      timestamp: new Date().toLocaleString(),
    });
    setText("");
  };

  return (
    <div id="tasksHandler">
      <TaskFilters setFilter={setFilter} />

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
