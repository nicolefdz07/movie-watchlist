import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SearchMoviesProvider } from "./context/SearchMoviesContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchMoviesProvider>
      <App />
    </SearchMoviesProvider>
  </StrictMode>
);
