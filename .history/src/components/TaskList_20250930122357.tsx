import "../styles/components/TodoList.css";

type Todo = {
  id: string;
  text: string;
  status: "active" | "completed";
  timestamp: string;
};
type TaskListProps = {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
};

export default function TaskList({ todos, onDelete }: TaskListProps) {
  const handleDelete = (todo: Todo) => {
    onDelete(todo);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list">
          <div className="todo-left">
            <input type="checkbox" />
            <span className="todo-text">{todo.text}</span>
          </div>
          <div className="todo-right">
            <span className="todo-timestamp">{todo.timestamp}</span>
            <button id="deleteBtn" onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
