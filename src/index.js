import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind.css";
import App from "./App";

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
