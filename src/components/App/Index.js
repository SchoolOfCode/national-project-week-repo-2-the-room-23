import MainContent from "../MainContent/index.js";
import { useState } from "react";
import ShowResults from "../ShowResults/index.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";


function App() {

  const [topic, setTopic] = useState("");

  const [result, setResult] = useState(0);



  function getTopicValue(event) {
    const newTopic = event.target.name;
    setTopic(newTopic);
  }

  function addPoints() {
    setResult( result + 1);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Introduction handleTopic={getTopicValue} />} />
        <Route path="/questions" element={<MainContent topic={topic} handleAddPoints={addPoints} />} />
        <Route path="/results" element={<ShowResults result={result} />} />
      </Routes>
    </div>
  );
}

export default App;
