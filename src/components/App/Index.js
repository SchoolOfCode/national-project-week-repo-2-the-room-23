import { useEffect } from "react";
import { API_URL } from "../../config/index.js";
import "./App.css";
import Header from "../Header";

function App() {

  
  useEffect(() => {
    async function getData() {
      console.log(API_URL);
      const response = await fetch(`${API_URL}/questions`,{
    mode: 'no-cors' });
      console.log(response);
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
