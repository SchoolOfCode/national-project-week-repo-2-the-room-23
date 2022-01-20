import { Link } from "react-router-dom";

const Introduction = ({ handleTopic }) => {
  return (
    <nav>
      <Link
        to="/questions"
        onClick={(event) => handleTopic(event)}
        name="questions"
      >
        Topic 1
      </Link>
      <Link
        to="/questions"
        onClick={(event) => handleTopic(event)}
        name="topicTwo"
      >
        Topic 2
      </Link>
      <Link
        to="/questions"
        onClick={(event) => handleTopic(event)}
        name="topicThree"
      >
        Topic 3
      </Link>
    </nav>
  );
};

export default Introduction;
