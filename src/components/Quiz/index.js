import QuestionText from "../QuestionText";
import Answers from "../Answers/index";
import SubmitButton from "../SubmitButton/index";
import { Link } from "react-router-dom";

function Quiz({ actualQuestion, position }) {
  return (
    <div>
      <QuestionText text={actualQuestion.question} id={actualQuestion.id} />
      <Answers
        answer={actualQuestion.answer}
        actA={actualQuestion.opta}
        actB={actualQuestion.optb}
        actC={actualQuestion.optc}
      />
      <SubmitButton />
      <Link to="/">Home</Link>
    </div>
  );
}
export default Quiz;
