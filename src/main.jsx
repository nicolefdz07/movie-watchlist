import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SearchMoviesProvider } from "./context/SearchMoviesContext";
import "./index.css";
import { MoviesProvider } from "./context/MoviesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchMoviesProvider>
      <MoviesProvider>  
      <App />
      </MoviesProvider>
    </SearchMoviesProvider>
  </StrictMode>
);
