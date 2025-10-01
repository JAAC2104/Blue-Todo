import "../styles/components/Statistics.css";
import type { Todo } from "../types/Todo";

type StatisticsProps = {
  todos: Todo[];
};

export default function Statistics({ todos }: StatisticsProps) {
  const active = todos.filter((t) => t.status === "todo").length;
  const completed = todos.filter((t) => t.status === "completed").length;
  const total = todos.length;

  return (
    <>
      <div className="statistic-container">
        <div className="statistics">
          <div className="statistic-box">
            <span className="statistic-number">{total}</span>
            <div>Total Tasks</div>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic-box">
            <span className="statistic-number">{completed}</span>
            <div>Completed</div>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic-box">
            <span className="statistic-number">{active}</span>
            <div>Pending</div>
          </div>
        </div>
      </div>
    </>
  );
}
