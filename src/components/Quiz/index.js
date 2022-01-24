import QuestionText from "../QuestionText";
import Answers from "../Answers/index";

// Quiz component for rendering the quizz and andswers
function Quiz({
  actualQuestion,
  handleResult,
  disable,
  randomArray,
  position,
  isCorrect,
  nextQuestion,
}) {
  return (
    <div className="Quizz">
      <QuestionText
        text={actualQuestion.question}
        id={actualQuestion.id}
        position={position}
      />
      <Answers
        handleResult={handleResult}
        disable={disable}
        answer={actualQuestion.answer}
        optA={actualQuestion.opta}
        optB={actualQuestion.optb}
        optC={actualQuestion.optc}
        randomArray={randomArray}
        isCorrect={isCorrect}
        nextQuestion={nextQuestion}
      />
    </div>
  );
}
export default Quiz;
