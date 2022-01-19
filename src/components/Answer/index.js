

function Answer({text}) {


  function checkValue(event) {
    console.log(event.target.value);
  }


  return (

    <div>
      <span>{text}</span>
      <input type="radio" onChange={checkValue} value={text}/>
    </div>
  )
}

export default Answer;