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

  // State holding a boolean parameter for disable the click answers
  const [disable, setDisable] = useState(false); 
  
  // State for setting the color os the answers depending if its correct, incorrect or not selected
  const [isCorrect, SetIsCorrecT] = useState("white");
  
  // State for checking when nextQuestion is pressed
  const [nextQuestion, setNextquestion] = useState("true");


  // State for holding the array os answers to chow
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
      // Set the first random oreder for answers
      setAnswerArray(randomArray(data.payload[0]));

    }
    // Call the function for getiting the data from the back-end
    getData(topic);
  }, [topic]);

  // Function for Making and object answers from the question object into an array and randomize the positions
  function randomArray(obj) {
  // Make and object with the question answers
  const value = { 
    a: obj.opta,
    b: obj.optb,
    c: obj.optc,
    d: obj.answer       
  }  
  // Convert the object value into an array 
  const answersArray = Object.values(value);  
  // Function for changing the position of the values by random numbers 
    function randomizeArray(array) {
      const element = array[array.length - 1]
      const randomPosition = Math.floor(Math.random() * array.length);
      const newArray = [...array.slice(0,randomPosition), element, ...array.slice(randomPosition, array.length -1)];
      return newArray;
    }
   // Return the random array
   return randomizeArray(answersArray);

  }

  function toggleNextQuestion() {
    setNextquestion(!nextQuestion);
  }

  // Function for setting the disable state to false
  function handleDisable() {
    setDisable(false);
  }
  // Function for setting the next question as actual question anda randomize the answers
  function changeQuestion(){
    setActualQuestion(questionsArray[position]);
    setAnswerArray(randomArray(questionsArray[position]));
    SetIsCorrecT("white");
    toggleNextQuestion();
  }
  // Function for setting the position of the actual answer
  function handleNextQuestion() {
    setPosition(position + 1);
  }
  // Function for checking the results of the answer when it has been clicked
  function checkResult(event) {
    // set disable to true for disable the clicking on answers
    setDisable(true);

    if ( event.target.innerText === actualQuestion.answer) {
      // set the background of the answer to green if is correct
      SetIsCorrecT("green");
      handleAddPoints();
    }else{
      // set the background of the answer to red if is incorrect
      SetIsCorrecT("red");
     }
  }

  return (
       <main>
         <Quiz 
               actualQuestion={actualQuestion}
               disable={disable} 
               position={position} 
               handleResult={checkResult}
               randomArray={answerArray} 
               isCorrect={isCorrect}
               nextQuestion={nextQuestion}  
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
