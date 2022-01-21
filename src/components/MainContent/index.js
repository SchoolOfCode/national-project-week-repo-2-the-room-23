import NextQuestion from "../NextQuestion";
import Quiz from "../Quiz/index";
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

// MainContent component which it's showing the questions and answers of aour game
const MainContent = ({ topic, handleAddPoints, handleResetResult }) => {
  // State for holding the questions data from the back-end claud database
  const [questionsArray, setQuestionsArray] = useState([]);
  
  // State for holding the actual question representing
  const [actualQuestion, setActualQuestion] = useState({});
  
  // State for holding the position of the actual question in the questionsArray
  const [position, setPosition] = useState(1);
  
  // 
  const [progression, setProgression] = useState(0);

  // State holding a boolean parameter for disable the click answers
  const [disable, setDisable] = useState(false); 


  const [color , setColor] = useState("");

  const [answerArray , setAnswerArray] = useState([]);

  // Function for getting the data from the back-end depends of the Topic end-point 
  useEffect(() => {
    
    async function getData(topic) {
      const response = await fetch(`${API_URL}/questions/${topic}`);
      const data = await response.json();
      // Set the questions array with the data from the fetch request
      setQuestionsArray(data.payload);
      // Set the actual questions with the first question from the data
      setActualQuestion(data.payload[0]);

      setAnswerArray(randomArray(data.payload[0]));

    }
    // Call the function for getiting the data from the back-end
    getData(topic);
  }, [topic]);

function randomArray(obj) {

const value = {

   a: obj.opta,
   b: obj.optb,
   c: obj.optc,
   d: obj.answer       
} 

const answersArray = Object.values(value);  

function randomizeArray(array) {
   const element = array[array.length - 1]
   const randomPosition = Math.floor(Math.random() * array.length);
   const newArray = [...array.slice(0,randomPosition), element, ...array.slice(randomPosition, array.length -1)];
   return newArray;
}

return randomizeArray(answersArray);

}




  function handleDisable() {
    setDisable(false);
  }

  function changeQuestion(){
    setActualQuestion(questionsArray[position]);
    setAnswerArray(randomArray(questionsArray[position]));
  }

  function handleNextQuestion() {
    setPosition(position + 1);
  }

  function correctAnswer() {
    setProgression(progression + 1);
  }

   function checkResult(event) {
     setDisable(true);
  
     console.log(event.currentTarget);
     console.log(actualQuestion.answer);
    if ( event.target.innerText === actualQuestion.answer) {
        event.currentTarget.className = "green";
        setColor("green")
        console.log("correct");
        handleAddPoints();
        //correctAnswer();
    }else{
       event.currentTarget.className = "red";
       setColor("red");
       console.log("incorrect");
     }
  }

  return (
       <main>
         <Quiz className={disable === true? "white": ""}
               actualQuestion={actualQuestion}
               disable={disable} 
               position={position} 
               correctAnswer={correctAnswer}
               handleResult={checkResult}
               randomArray={answerArray} 
               color={color}  
               />
           <NextQuestion handleChangeQuestion={changeQuestion} handleNextQuestion={handleNextQuestion} handleDisable={handleDisable} position={position}  />     
        <Link className={position === 10 ? "button" : "button disable"} to="/results">See your sesult</Link>
        <Link className="link" to="/" onClick={handleResetResult}>
          <div className="homeButton">
          <div id="homeTshirt"></div>
        </div>
        </Link>
       </main>
  )
};

export default MainContent;
