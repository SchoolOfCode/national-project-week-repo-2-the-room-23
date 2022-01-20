import { useState } from "react";
import QuestionText from "../QuestionText";
import Answers from "../Answers/index";
import SubmitButton from "../SubmitButton/index";
import { Link } from "react-router-dom";

function Quiz({ actualQuestion, handleResult, position }) {
  //console.log(chosenAnswer);
  //const [disable, setDisable] = useState(false);
  //const [answersColor , setanswerColor] = useState("");
  //console.log(chosenAnswer);
  //console.log(actualQuestion.answer);

  /*

  function getAnswerValue(event) {
    setChosenAnswer(event.target.value);
    setDisable(true);
  }

*/

  return (
    <div>
      <QuestionText text={actualQuestion.question} id={actualQuestion.id} />
      <Answers
        handleResult={handleResult}
        answer={actualQuestion.answer}
        optA={actualQuestion.opta}
        optB={actualQuestion.optb}
        optC={actualQuestion.optc}
        //disable={disable}
      />
      <SubmitButton />
    </div>
  );
}
export default Quiz;
