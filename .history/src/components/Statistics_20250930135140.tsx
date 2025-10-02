import "../styles/components/Statistics.css";
import type { Todo } from "../types/Todo";

type StatisticsProps = {
  todos: Todo[];
};

export default function Statistics({ todos }: StatisticsProps) {
  const { status } = todos;
  const active = todos.map((t) => t.status === "active").length;

  return (
    <>
      <div className="statistic-container">
        <div className="statistics">
          <div className="statistic-box">
            <span className="statistic-number">1</span>
            <div>Total Tasks</div>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic-box">
            <span className="statistic-number">1</span>
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
