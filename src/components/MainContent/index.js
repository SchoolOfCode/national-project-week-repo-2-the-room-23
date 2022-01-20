import NextQuestion from "../NextQuestion";
import Quiz from '../Quiz/index'
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";


const MainContent = ({topic}) => {

  const [questionsArray, setQuestionsArray] = useState([]);

  const [actualQuestion, setActualQuestion] = useState({});
 
  const [position, setPosition ] = useState(1);

  const [progression, setProgression] = useState(0);

  //console.log(questionsArray);


    useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_URL}/questions/questions`);
      const data = await response.json();
      setQuestionsArray(data.payload);
      setActualQuestion(data.payload[0])
      //console.log(data);
    }
    getData();
    //setActualQuestion(questionsArray[0]);
  }, [topic]);


  function handleNextQuestion() {
    setPosition(position + 1);
    setActualQuestion(questionsArray[position]);
  }

  function correctAnswer() {
    setProgression(progression + 1);
  }

  return (
       <main>
         <NextQuestion handleNextQuestion={handleNextQuestion}  />
         <Quiz actualQuestion={actualQuestion}  position={position} correctAnswer={correctAnswer} />
       </main>
  )
};

export default MainContent;
