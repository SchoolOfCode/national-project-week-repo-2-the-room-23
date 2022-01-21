import "./style.css";
// Function for rendering the questions 
function Questions({ text, position }) {
  return(
    <div className="question">
      <span className="questionNumber">Question {position}/10</span>
      <p className="question-text">{text}</p>
    </div>
  ) 
}
export default Questions;
