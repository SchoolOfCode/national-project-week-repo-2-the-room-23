import "./Answer.css";

// Function for rendering an answer
function Answer({text, handleResult, disable }) {

  return (
      <li className="" style={disable === false ? {backgroundColor: "white"}: {}} onClick={disable === false ? (event) => {return handleResult(event)} : () => {} }>{text}</li>
  )
}

export default Answer;