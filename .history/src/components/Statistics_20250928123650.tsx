import "../styles/components/Statistics.css";

export default function Statistics() {
  return (
    <>
      <div className="statistic-container">
        <div className="statistics">
          <div className="statistic-box">
            <span>1</span>
            <div>Total Tasks</div>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic-box">
            <span>1</span>
            <div>Completed</div>
          </div>
        </div>
        <div className="statistics">
          <div className="statistic-box">
            <span>1</span>
            <div>Pending</div>
          </div>
        </div>
      </div>
    </>
  );
}
