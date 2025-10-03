import { useState } from "react";

export default function TaskFilters({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<"all" | "todo" | "completed">>;
}) {
  const [isActive, setIsActive] = useState<"all" | "todo" | "completed">("all");

  return (
    <>
      <div id="tasksFilters">
        <button
          className={`filterBtn ${isActive === "all" ? "active" : ""}`}
          onClick={() => {
            setFilter("all");
            setIsActive("all");
          }}
        >
          All Tasks
        </button>
        <button
          className={`filterBtn ${isActive === "todo" ? "active" : ""}`}
          onClick={() => {
            setFilter("todo");
            setIsActive("todo");
          }}
        >
          To Complete
        </button>
        <button
          className={`filterBtn ${isActive === "completed" ? "active" : ""}`}
          onClick={() => {
            setFilter("completed");
            setIsActive("completed");
          }}
        >
          Completed
        </button>
      </div>
    </>
  );
}
