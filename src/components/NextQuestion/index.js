import "./style.css";

function NextQuestion({ handleNextQuestion, handleChangeQuestion }) {
  return (
    <>
      <button
        className="button"
        onClick={() => {
          handleNextQuestion();
          handleChangeQuestion();
        }}
      >
        Next Question
      </button>
    </>
  );
}
export default NextQuestion;
