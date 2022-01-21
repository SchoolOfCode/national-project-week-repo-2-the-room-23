import "./Answers.css";
import Answer from "../Answer/index.js"

// Function for representing and answers list for every answer
function Answers({handleAnswerValue, handleResult, disable, randomArray, isCorrect, nextQuestion }){

return(
       <ul>
          {randomArray.map( (element,index) => {
             return( 
               <Answer handleAnswerValue={handleAnswerValue}
               className="white"
               handleResult={handleResult}
               text={element} 
               disable={disable}
               key={index}
               isCorrect={isCorrect}
               nextQuestion={nextQuestion}
               />
            )
          })
          }
       </ul>
    )
}
export default Answers;
