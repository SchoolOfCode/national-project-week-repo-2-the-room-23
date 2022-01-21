import NextQuestion from "../NextQuestion";
import Quiz from "../Quiz/index";
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

const MainContent = ({ topic, handleAddPoints }) => {
  const [questionsArray, setQuestionsArray] = useState([]);

  const [actualQuestion, setActualQuestion] = useState({});
  
  const [position, setPosition] = useState(1);

  const [progression, setProgression] = useState(0);

  const [disable, setDisable] = useState(false); 
  console.log(disable);

  const [array , setArray] = useState([]);

  const [color , setColor] = useState("");


  //console.log(questionsArray);

  useEffect(() => {
    async function getData(topic) {
      const response = await fetch(`${API_URL}/questions/${topic}`);
      const data = await response.json();
      setQuestionsArray(data.payload);
      setActualQuestion(data.payload[0]);
      //console.log(data);
    }
    getData(topic);
  }, [topic]);


const value = {
   a: actualQuestion.opta,
   b: actualQuestion.optb,
   c: actualQuestion.optc,
   d: actualQuestion.answer
        
} 

const answersArray = Object.values(value);  
/*
function randomizeArray(array) {
   const element = array[array.length - 1]
   const randomPosition = Math.floor(Math.random() * array.length);
   const newArray = [...array.slice(0,randomPosition), element, ...array.slice(randomPosition, array.length -1)];
   return newArray;
}

const randomArray = disable === false ? setArray(randomizeArray(answersArray)) : "" ;
*/




  function handleDisable() {
    setDisable(false);
  }

  function changeQuestion(){
    setActualQuestion(questionsArray[position]);
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
               randomArray={answersArray} 
               color={color}  
               />
           <NextQuestion handleChangeQuestion={changeQuestion} handleNextQuestion={handleNextQuestion} handleDisable={handleDisable} position={position}  />     
        <Link className={position === 10 ? "button" : "button disable"} to="/results">See your sesult</Link>
        <Link className="link" to="/">
          <div className="homeButton">
          <div id="homeTshirt"></div>
        </div>
        </Link>
       </main>
  )
};

export default MainContent;
