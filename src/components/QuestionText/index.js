import "./style.css";
<<<<<<< HEAD

function Questions({ text }) {
  return <p className="question-text">{text}</p>;
=======
// Function for rendering the questions 
function Questions({ text, position }) {
  return(
    <div className="question">
      <span className="questionNumber">Question {position}/10</span>
      <p className="question-text">{text}</p>
    </div>
  ) 
>>>>>>> alex
}
export default Questions;
