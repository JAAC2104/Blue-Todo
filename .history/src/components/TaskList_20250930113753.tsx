import "../styles/components/TodoList.css";

interface TaskListProps {
  todos: Todo[];
}
export default function TaskList({ todos }) {
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
            <button className="deleteBtn">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
