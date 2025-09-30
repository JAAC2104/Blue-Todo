import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import Statistics from "../components/Statistics";
import "../styles/pages/MainPage.css";
import TasksHandler from "../components/TasksHandler";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div id="tasksMenu">
        <Statistics />
        <TasksHandler/>
        <TaskList />
      </div>
    </>
  );
}
