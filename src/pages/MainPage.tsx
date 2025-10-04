import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import TasksHandler from "../components/TasksHandler";
import "../styles/pages/MainPage.css";
import type { Todo } from "../types/Todo";
import useTasksHook from "../hooks/useTasksHook";
import TaskItem from "../components/TaskItem";

export default function MainPage() {
  const { tasks, loading, updateTask, deleteTask, error } = useTasksHook();

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
        <TasksHandler />

        {loading && <p id="noListStatement">Loading…</p>}
        {!loading && error && <p id="noListStatement">Error: {error}</p>}

        {!loading && !error && (
          tasks.length < 1 ? (
            <p id="noListStatement">You don’t have any items in the list yet.</p>
          ) : (
            <ul>
              {tasks.map((todo) => (
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
