import React from "react";
import ReactDOM from "react-dom/client";
// Global styles that apply to the WHOLE website (resets, fonts, color variables)
import "./index.css";
import App from "./App";

// React 18 way of rendering the app into the <div id="root"></div> from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
