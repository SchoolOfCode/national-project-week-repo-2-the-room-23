import { Link } from "react-router-dom";
import "./style.css";

const ShowResults = ({ count }) => {
  return (
    <div className="scorecontainer">
      <Link to="/">Home</Link>
      <p className="score">Your score: {count}/10</p>
    </div>
  );
};

export default ShowResults;
