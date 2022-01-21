import { useState } from "react";
import QuestionText from "../QuestionText";
import Answers from "../Answers/index";
import { Link } from "react-router-dom";

function Quiz({actualQuestion, handleResult, disable, randomArray, color, position }){


    return ( 
      <div className="Quizz">
        <QuestionText  text={actualQuestion.question} id={actualQuestion.id} position={position} />
        <Answers  
                 handleResult={handleResult}
                 disable={disable}
                 answer={actualQuestion.answer} 
                 optA={actualQuestion.opta} 
                 optB={actualQuestion.optb} 
                 optC={actualQuestion.optc}
                 randomArray={randomArray}
                 color={color}
                 //disable={disable}
                  
                 />
      </div>
    )
}
export default Quiz;
