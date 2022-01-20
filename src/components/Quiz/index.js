import { useState } from "react";
import QuestionText from "../QuestionText";
import Answers from "../Answers/index";
import SubmitButton from "../SubmitButton/index";
import { Link } from "react-router-dom";

function Quiz({actualQuestion, handleResult, disable }){


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
        <QuestionText  text={actualQuestion.question} id={actualQuestion.id} />
        <Answers  
                 handleResult={handleResult}
                 disable={disable}
                 answer={actualQuestion.answer} 
                 optA={actualQuestion.opta} 
                 optB={actualQuestion.optb} 
                 optC={actualQuestion.optc}
                 //disable={disable}
                  
                 />
        <Link to="/">Home</Link>
      </div>
    )
}
export default Quiz;
