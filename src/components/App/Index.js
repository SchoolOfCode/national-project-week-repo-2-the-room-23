import { useEffect } from "react";

import "./App.css";

import { API_URL } from "../../config";

import Introduction from '../Introduction/index'
import Title from "../Title";
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
     <Title/>
     <Introduction/>
    </div>
  );
}

export default App;
