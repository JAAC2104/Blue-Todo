import { useState } from "react";
import type { Todo } from "../types/Todo";

export default function TaskFilters({
  todos,

  setFilter,
}: {
  todos: Todo[];

  setFilter: React.Dispatch<React.SetStateAction<"all" | "todo" | "completed">>;
}) {
  const [isActive, setIsActive] = useState<"all" | "todo" | "completed">("all");

  return (
    <>
      <div id="tasksFilters">
        <button
          className={`filterBtn ${isActive === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Tasks
        </button>
        <button
          className={`filterBtn ${isActive === "todo" ? "active" : ""}`}
          onClick={() => setFilter("todo")}
        >
          To Complete
        </button>
        <button
          className={`filterBtn ${isActive === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
}
