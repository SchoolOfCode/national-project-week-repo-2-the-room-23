import "./Answer.css";

function Answer({text, className, handleAnswerValue, handleResult, disable}) {



  return (


      <p className={className} onClick={(event) => {return handleResult(event)}}>{text}</p>
  

  )
}

export default Answer;