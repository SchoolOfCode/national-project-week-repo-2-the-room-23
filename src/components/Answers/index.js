import "./Answers.css";
import Answer from "../Answer/index.js";

// Function for representing an answers list for every answer
function Answers({ handleAnswerValue, handleResult, disable, randomArray }) {
  return (
    <ul>
      {randomArray.map((element, index) => {
        return (
          <Answer
            handleAnswerValue={handleAnswerValue}
            className="white"
            handleResult={handleResult}
            text={element}
            disable={disable}
            key={index}
          />
        );
      })}
    </ul>
  );
}
export default Answers;
