import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import TasksHandler from "../components/TasksHandler";
import "../styles/pages/MainPage.css";
import type { Todo } from "../types/Todo";
import useTasksHook from "../hooks/useTasksHook";
import TaskItem from "../components/TaskItem";

type Filter = "all" | "todo" | "completed";

export default function MainPage() {
  const { tasks, loading, updateTask, deleteTask, error } = useTasksHook();

  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "todo") return tasks.filter(t => t.status !== "completed");
    if (filter === "completed") return tasks.filter(t => t.status === "completed");
    return tasks;
  }, [tasks, filter]);

  const handleDelete = (deleted: Todo) => {
    deleteTask(deleted.id).catch((e) => console.error("deleteTask error:", e));
  };

  const handleUpdate = (updated: Todo) => {
    const patch: Partial<Omit<Todo, "id">> = {};
    if (typeof updated.status !== "undefined") patch.status = updated.status;
    if (typeof updated.text !== "undefined") patch.text = updated.text;
    updateTask(updated.id, patch).catch((e) => console.error("updateTask error:", e));
  };

  return (
    <>
      <Navbar />
      <div id="tasksMenu">
        <Statistics todos={tasks} />

        <TasksHandler filter={filter} onFilterChange={setFilter} />

        {loading && <p id="noListStatement">Loading…</p>}
        {!loading && error && <p id="noListStatement">Error: {error}</p>}

        {!loading && !error && (
          filteredTasks.length < 1 ? (
            <p id="noListStatement">You don’t have any items in the list yet.</p>
          ) : (
            <ul>
              {filteredTasks.map((todo) => (
                <TaskItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))}
            </ul>
          )
        )}
      </div>
    </>
  );
}
