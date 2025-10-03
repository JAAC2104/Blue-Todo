import { useState } from "react";
import type { Todo } from "../types/Todo";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDelete = (deleted: Todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };
  const handleUpdate = (updated: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };
  return { todos, handleAdd, handleDelete, handleUpdate };
}
