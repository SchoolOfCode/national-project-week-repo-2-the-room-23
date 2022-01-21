import "./Answer.css";

function Answer({text, className, handleAnswerValue, handleResult, disable, color}) {



  return (
    
      <li onClick={disable === false ? (event) => {return handleResult(event)} : () => {} }>{text}</li>

  )
}

export default Answer;