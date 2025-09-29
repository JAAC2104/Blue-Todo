import "../styles/components/Statistics.css";

export default function Statistics() {
  return (
    <>
      <div className="statistic-container">
        <div className="statistics">
          <span></span>Total Tasks
        </div>
        <div className="statistics">
          <span></span>Completed
        </div>
        <div className="statistics">
          <span></span>Pending
        </div>
      </div>
    </>
  );
}
