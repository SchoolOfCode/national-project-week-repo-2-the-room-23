import "./Answer.css";

function Answer({text, handleAnswerValue, handleResult, disable}) {



  return (

    <div>
      <label onClick={(event) => {return handleResult(event)}}>{text}</label>
      <input type="radio" onChange={handleAnswerValue} value={text} disabled={disable}/>
    </div>
  )
}

export default Answer;