

function Answer({text, handleAnswerValue, handleResult, disable}) {



  return (

    <div>
      <span>{text}</span>
      <input type="radio" onChange={handleAnswerValue} onClick={(event) => handleResult(event)} value={text} disabled={disable}/>
    </div>
  )
}

export default Answer;