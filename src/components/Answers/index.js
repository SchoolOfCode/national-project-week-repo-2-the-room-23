import { useState } from "react";
import Answer from "../Answer/index.js"


function Answers(props){

const answersArray = Object.values(props);
//console.log(answersArray);   

const [chosenAnswer, setChosenAnswer] = useState(""); 

function randomizeArray(array) {
   const element = array[array.length - 1]
   const randomPosition = Math.floor(Math.random() * array.length);
   console.log(randomPosition);
   const newArray = [...array.slice(0,randomPosition), element, ...array.slice(randomPosition, array.length -1)];
   return newArray;
}

const randomArray = randomizeArray(answersArray);


return(
       <ul>
          {randomArray.map(element => <Answer text={element} />)}
       </ul>
    )
}
export default Answers;