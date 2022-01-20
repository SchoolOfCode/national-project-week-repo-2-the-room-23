import MainContent from "../MainContent/index.js";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/index.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";
import ShowResults from "../ShowResults/index.js";

function App() {
  /*   useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_URL}/questions`);
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []); */

  const [topic, setTopic] = useState("");

  function getTopicValue(event) {
    const newTopic = event.target.name;
    setTopic(newTopic);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Introduction handleTopic={getTopicValue} />}
        />
        <Route path="/questions" element={<MainContent topic={topic} />} />
        <Route path="/answers" />
      </Routes>
    </div>
  );
}

export default App;
