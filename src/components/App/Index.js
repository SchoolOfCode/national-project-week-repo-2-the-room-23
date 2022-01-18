import { useEffect } from "react";

import "./App.css";
import Header from "../Header";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://soc-quizz.herokuapp.com/questions`);
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
