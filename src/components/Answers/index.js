import "./Answers.css";
import Answer from "../Answer/index.js"


function Answers({handleAnswerValue, handleResult, answer, optA, optB, optC, disable, randomArray, color}){
/*
const value = {
   a: optA,
   b: optB,
   c: optC,
   d: answer
        
} 
 
const answersArray = Object.values(value);  

function randomizeArray(array) {
   const element = array[array.length - 1]
   const randomPosition = Math.floor(Math.random() * array.length);
   const newArray = [...array.slice(0,randomPosition), element, ...array.slice(randomPosition, array.length -1)];
   return newArray;
}

const randomArray = randomizeArray(answersArray);
*/

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
               color={color}

               />
            )
          })
          }
       </ul>
    )
}
export default Answers;
