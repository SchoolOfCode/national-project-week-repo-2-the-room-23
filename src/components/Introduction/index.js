import { Link } from "react-router-dom";
import "./style.css";
import head from "../../img-src/grey-matter-removebg-preview.png";

const Introduction = ({ handleTopic }) => {
  return (
    <section className="flex-container">
      <p className="title">Please select your topic:</p>
      <nav className="flex-container">
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="questions"
        >
          Topic 1
        </Link>
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="topicTwo"
        >
          Topic 2
        </Link>
        <Link
          className="link"
          to="/questions"
          onClick={(event) => handleTopic(event)}
          name="topicThree"
        >
          Topic 3
        </Link>
      </nav>
      <img src={head} alt="a thinking head" />
    </section>
  );
};

export default Introduction;
