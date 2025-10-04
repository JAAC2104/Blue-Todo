import "../styles/components/TodoList.css";
import type { Todo } from "../types/Todo";

type TaskItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
};

export default function TaskItem({ todo, onDelete, onUpdate }: TaskItemProps) {
  const { id, text, status, timestamp } = todo;

  const handleDelete = () => onDelete(todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextStatus = e.target.checked ? "completed" : "todo";
    onUpdate({ ...todo, status: nextStatus });
  };

  return (
    <li className="todo-list">
      <div className="todo-left">
        <input
          type="checkbox"
          id={id}
          checked={status === "completed"}
          onChange={handleChange}
        />
        <label htmlFor={id} className="todo-text">
          {text}
        </label>
      </div>
      <div className="todo-right">
        <span className="todo-timestamp">{timestamp}</span>
        <button id="deleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
