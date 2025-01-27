import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // Ensure this is importing the correct CSS file
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);