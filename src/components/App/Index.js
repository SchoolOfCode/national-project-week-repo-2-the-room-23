import { useEffect } from "react";
import { API_URL } from "../../config/index.js";
import "./App.css";
import Header from "../Header";


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
    </div>
  );
}

export default App;
