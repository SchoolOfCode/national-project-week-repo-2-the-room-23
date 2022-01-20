import { Link } from "react-router-dom";

const ShowResults = ({ count }) => {
  return (
    <div className="scorecontainer">
      <Link to="/">Home</Link>
      <p className="score">{count}/10</p>
    </div>
  );
};

export default ShowResults;
