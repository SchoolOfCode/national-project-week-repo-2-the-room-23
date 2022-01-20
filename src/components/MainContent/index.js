import NextQuestion from "../NextQuestion";
import Quiz from "../Quiz/index";
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";

const MainContent = ({ topic }) => {
  const [questionsArray, setQuestionsArray] = useState([]);

  const [actualQuestion, setActualQuestion] = useState({});
  //console.log(actualQuestion);
  const [position, setPosition] = useState(1);

  const [progression, setProgression] = useState(0);

  //const [chosenAnswer, setChosenAnswer] = useState(""); 



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

  function handleNextQuestion() {
    setPosition(position + 1);
    setActualQuestion(questionsArray[position]);
  }

  function correctAnswer() {
    setProgression(progression + 1);
  }

   function checkResult(event) {
     console.log(event.target.innerText);
    if ( event.target.innerText === actualQuestion.answer) {
        event.target.className = "green";
        console.log("correct");
        //correctAnswer();
    }else{
       event.target.className = "red";
       console.log("incorrect");
     }
  }

  return (
       <main>
         <NextQuestion handleNextQuestion={handleNextQuestion}  />
         <Quiz actualQuestion={actualQuestion} 
               position={position} 
               correctAnswer={correctAnswer}
               handleResult={checkResult} />
       </main>
  )
};

export default MainContent;
