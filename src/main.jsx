import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n"; // Importáld az i18n konfigurációt

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
