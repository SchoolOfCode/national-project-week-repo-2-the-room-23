import { Link } from "react-router-dom";
import "./style.css";
import head from "../../img-src/grey-matter-removebg-preview.png";

// Component to present an introduction and Topics navigation at the biginnig of our app
const Introduction = ({ handleTopic }) => {
  return (
    <section className="flex-container">
      <p className="title">Please select your topic:</p>
      {/* navigation menu for the questions topics */}
      <nav className="flex-container">
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="topic1"
        >
          Topic 1
        </Link>
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="topic2"
        >
          Topic 2
        </Link>
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="topic3"
        >
          Topic 3
        </Link>
      </nav>
      <img className="head" src={head} alt="a thinking head" />
    </section>
  );
};

export default Introduction;
