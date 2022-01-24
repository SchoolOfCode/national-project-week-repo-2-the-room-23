import "./Answer.css";
import { useState , useEffect} from "react";


// Function for rendering an answer
function Answer({text, handleResult, disable, isCorrect, nextQuestion }) {
  //State to control the color of the answer depends of if is correct, incorrect, or not selected
  const[ color, setColor] = useState();
  // Function to change color to true, means that it's been selected
  function toggleColor() {
    setColor(true);
  }
  // Initialize the color to false every time next question is pressed
  useEffect(() => {
    setColor(false);
  },[nextQuestion])

  return (
      <li className={ disable === false? "white" : color === false? "white" : isCorrect } 
          onClick={disable === false ? (event) => {
          handleResult(event);
          toggleColor();
          } : () => {} }>
          {text}
      </li>
  )
}

export default Answer;

