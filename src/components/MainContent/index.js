import NextQuestion from "../NextQuestion";
import Quiz from '../Quiz/index'
import { API_URL } from "../../config/index.js";
import { useEffect, useState } from "react";


const MainContent = ({topic}) => {

  const [questionsArray, setQuestionsArray] = useState([]);

  const [actualQuestion, setActualQuestion] = useState({});

  const [position, setPosition ] = useState(0);

  //console.log(questionsArray);


    useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_URL}/questions`);
      const data = await response.json();
      setQuestionsArray(data.payload);
      setActualQuestion(questionsArray[position])
      //console.log(data);
    }
    getData();
  }, [topic]);


  function handleNextQuestion() {

    setPosition(position + 1);
    setActualQuestion(questionsArray[position]);
  }

  return (
       <main>
         <NextQuestion handleNextQuestion={handleNextQuestion}  />
         <Quiz actualQuestion={actualQuestion}  position={position} />
       </main>
  )
};

export default MainContent;
