import "./Answer.css";

function Answer({text, handleAnswerValue, handleResult, disable}) {



  return (

    <div>
      <span onClick={(event) => {return handleResult(event)}}>{text}</span>
  
    </div>
  )
}

export default Answer;