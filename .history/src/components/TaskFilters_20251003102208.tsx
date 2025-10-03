import { useState } from "react";
import type { Todo } from "../types/Todo";

export default function TaskFilters({
  todos,
  filter,
  filtered,
}: {
  todos: Todo[];
}) {
  const [isActive, setIsActive] = useState<"all" | "todo" | "completed">("all");

  return (
    <>
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
    </>
  );
}
