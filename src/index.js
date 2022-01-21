import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/Index";

ReactDOM.render(
  /*Use BrowserRouter to manage the topics navigation*/
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
