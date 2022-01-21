import MainContent from "../MainContent/index.js";
import { useState } from "react";
import ShowResults from "../ShowResults/index.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";

function App() {
  // State to control the Topic questions
  const [topic, setTopic] = useState("");
  // State to control the result of the answering questions
  const [result, setResult] = useState(0);
  console.log(result);

  // Function to change the topic state depending on the option selected
  function getTopicValue(event) {
    const newTopic = event.target.name;
    setTopic(newTopic);
  }
  // Function to add points to the final result state
  function addPoints() {
    setResult(result + 1);
  }
  // Function for reseting the result state
  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <Header />
      {/* use Routes and route to manage the Topics navigation*/}
      <Routes>
        <Route
          path="/"
          element={<Introduction handleTopic={getTopicValue} />}
        />
        <Route
          path="/questions"
          element={
            <MainContent
              topic={topic}
              handleAddPoints={addPoints}
              handleResetResult={resetResult}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ShowResults result={result} handleResetResult={resetResult} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
