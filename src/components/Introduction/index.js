import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <nav>
      <Link to="/questions">Topic 1</Link>
      <Link to="/questions">Topic 2</Link>
      <Link to="/questions">Topic 3</Link>
    </nav>
  );
};

export default Introduction;
