import NextQuestion from "../NextQuestion";
import Quiz from "../Quiz/index";
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

const MainContent = ({ topic, handleAddPoints }) => {
  const [questionsArray, setQuestionsArray] = useState([]);

  const [actualQuestion, setActualQuestion] = useState({});
  console.log(actualQuestion);
  const [position, setPosition] = useState(1);

  const [progression, setProgression] = useState(0);

  const [disable, setDisable] = useState(false); 



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

  function handleDisable() {
    setDisable(true);
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
     console.log(event.target.innerText);
     console.log(actualQuestion.answer);
    if ( event.target.innerText === actualQuestion.answer) {
        event.target.className = "green";
        console.log("correct");
        handleAddPoints();
        //correctAnswer();
    }else{
       event.target.className = "red";
       console.log("incorrect");
     }
  }

  return (
       <main>
         <NextQuestion handleChangeQuestion={changeQuestion} handleNextQuestion={handleNextQuestion} handleDisable={handleDisable}  />
         <Quiz actualQuestion={actualQuestion}
               disable={disable} 
               position={position} 
               correctAnswer={correctAnswer}
               handleResult={checkResult} />
        <Link to="/results">See your sesult</Link>
       </main>
  )
};

export default MainContent;
