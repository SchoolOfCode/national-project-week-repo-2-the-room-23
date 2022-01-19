import { useEffect } from "react";

import "./App.css";
import Header from "../Header";
import { API_URL } from "../../config";

import Main from '../Main/index'
// const API_URL = process.env.REACT_APP_API_URL;

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
      <Header />
      <MainContent/>
    </div>
  );
}

export default App;
