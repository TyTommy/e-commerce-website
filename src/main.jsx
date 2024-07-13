import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./language/i18next.js";
import "./index.css";
import "./tailwind.css";
import "react-quill/dist/quill.bubble.css";
import "./custom-quill.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
