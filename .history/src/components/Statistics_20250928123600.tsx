import "../styles/components/Statistics.css";

export default function Statistics() {
  return (
    <>
      <div className="statistic-container">
        <div className="statistics">
          <div>
            <span>1</span>
            <div>Total Tasks</div>
          </div>
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
