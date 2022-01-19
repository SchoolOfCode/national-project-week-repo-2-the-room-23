import { useEffect } from "react";
import { API_URL } from "../../config/index.js";
import "./App.css";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";
=======

import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Introduction from "../Introduction/index.js";

>>>>>>> f8caa707f6d56ccba437ed37776beedaaa0d6bff

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
<<<<<<< HEAD
=======

     <Introduction/>
>>>>>>> f8caa707f6d56ccba437ed37776beedaaa0d6bff
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
