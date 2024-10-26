import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/style.css";
import "./assets/styles/result.css";
import "./assets/styles/quiz.css";
import "./assets/styles/grid-list.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
