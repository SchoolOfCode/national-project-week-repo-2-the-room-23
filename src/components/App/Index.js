import { useEffect } from "react";
import { API_URL } from "../../config/index.js";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";


function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_URL}/questions`);
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className="App">

     <Introduction/>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

const Questions = () => {
  return <p>Hello World</p>;
};

export default App;
