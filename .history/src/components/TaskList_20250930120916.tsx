import "../styles/components/TodoList.css";

export default function TaskList({ todos, onDelete }) {
  const handleDelete = () => {
    console.log("deleted from task list");
    console.log(todo);
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
            <button id="deleteBtn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
