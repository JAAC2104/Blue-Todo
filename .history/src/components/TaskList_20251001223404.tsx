import type { ReactHTMLElement } from "react";
import "../styles/components/TodoList.css";
import type { Todo } from "../types/Todo";

type TaskListProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
};

export default function TaskList({ todo, onDelete, onUpdate }: TaskListProps) {
  const { id, text, status, timestamp } = todo;
  const handleDelete = (todo: Todo) => {
    onDelete(todo);
  };
  const handleChange = (todo: Todo, e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "todo";
    onUpdate({ ...todo, status });
  };

  return (
    <ul>
      <li key={id} className="todo-list">
        <div className="todo-left">
          <input
            type="checkbox"
            id={id}
            checked={status === "completed"}
            onChange={(e) => handleChange(todo, e)}
          />
          <label htmlFor={id} className="todo-text">
            {text}
          </label>
        </div>
        <div className="todo-right">
          <span className="todo-timestamp">{timestamp}</span>
          <button id="deleteBtn" onClick={() => handleDelete(todo)}>
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
}
