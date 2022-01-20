import { Link } from "react-router-dom";
import "./style.css";

const ShowResults = ({ result }) => {
  return (
    <div className="scorecontainer">
      <Link to="/">Home</Link>
      <p className="score">Your score: {result}/10</p>
    </div>
  );
};

export default ShowResults;
