import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import Statistics from "../components/Statistics";
import "../styles/pages/MainPage.css";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Statistics />
      <TaskList />
    </>
  );
}
