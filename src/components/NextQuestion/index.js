

function NextQuestion({handleNextQuestion, handleChangeQuestion}){
    return <> 
      <button onClick={() => {
      handleNextQuestion()
      handleChangeQuestion()}
      }>Next Question</button>
    </>
}
export default NextQuestion