import "./style.css";

function NextQuestion({
  handleNextQuestion,
  handleChangeQuestion,
  handleDisable,
  position,
}) {
  return (
    <>
      <button
        className={position === 10 ? "button disable" : "button"}
        onClick={() => {
          handleNextQuestion();
          handleChangeQuestion();
          handleDisable();
        }}
      >
        Next Question
      </button>
    </>
  );
}
export default NextQuestion;
