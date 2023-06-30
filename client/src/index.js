import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM.createRoot() => 告訴 React 要把內容 render 在哪個 DOM element 內
// root.render() => 告訴 React 要 render 的內容是什麼
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
