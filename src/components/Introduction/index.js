import { Link } from "react-router-dom";


const Introduction = ({handleTopic}) => {


  return (
    <nav>
      <Link to="/questions" onClick={(event) => handleTopic(event)} name="topic1">Topic 1</Link>
      <Link to="/questions" onClick={(event) => handleTopic(event)} name="topic2">Topic 2</Link>
      <Link to="/questions" onClick={(event) => handleTopic(event)} name="topic3">Topic 3</Link>
    </nav>
  );
};

export default Introduction;
