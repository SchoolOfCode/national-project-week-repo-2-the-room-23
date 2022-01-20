import { useState } from "react";
import QuestionText from "../QuestionText";
import Answers from '../Answers/index';
import SubmitButton from '../SubmitButton/index'

function Quiz({actualQuestion, position, correctAnswer}){

const [chosenAnswer, setChosenAnswer] = useState(""); 
console.log(chosenAnswer);
const [disable, setDisable] = useState(false);
const [answersColor , setanswerColor] = useState("");
//console.log(chosenAnswer);
//console.log(actualQuestion.answer);



  function getAnswerValue(event) {
    setChosenAnswer(event.target.value);
    setDisable(true);
  }

   function checkResult(event) {
     console.log(event)
    if ( event.target.value === actualQuestion.answer) {
        event.target.style.backgroundColor = "green";
        console.log("correct");
        correctAnswer();
    }else{
       event.target.style.backgroundColor = "red"
       console.log("incorrect");
     }
  }



    return ( 
      <div>
        <QuestionText  text={actualQuestion.question} id={actualQuestion.id} />
        <Answers handleAnswerValue={getAnswerValue} 
                 handleResult={checkResult}
                 answer={actualQuestion.answer} 
                 optA={actualQuestion.opta} 
                 optB={actualQuestion.optb} 
                 optC={actualQuestion.optc}
                 disable={disable}
                   

                 />
        <SubmitButton/>
      </div>
    )
}
export default Quiz;
 