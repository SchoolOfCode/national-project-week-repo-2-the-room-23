import "./Answer.css";

function Answer({text, className, handleAnswerValue, handleResult, disable}) {



  return (
    
      <p className={className} onClick={disable === false ? (event) => {return handleResult(event)} : () => {} }>{text}</p>

  )
}

export default Answer;