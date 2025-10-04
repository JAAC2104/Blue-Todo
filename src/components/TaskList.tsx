import TaskItem from "./TaskItem";
import type { Todo } from "../types/Todo";

type TodosListProps = {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
};

export default function TodosList({ todos, onDelete, onUpdate }: TodosListProps) {
  if (todos.length === 0) return <p>No tasks yet</p>;

  return (
    <ul>
      {todos.map((t) => (
        <TaskItem key={t.id} todo={t} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
