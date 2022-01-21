import { Link } from "react-router-dom";
import head from "../../img-src/grey-matter-removebg-preview.png";
import "./style.css";

const ShowResults = ({ result, handleResetResult }) => {
  return (
    <div className="scoreContainer">
      <p className="score">Your score: {result}/10</p>
      <img className="head" src={head} alt="a thinking head" />
        <Link className="link" to="/" onClick={handleResetResult}>
          <div className="homeButton">
            <div id="homeTshirt"></div>
          </div>
        </Link>

    </div>
  );
};

export default ShowResults;
