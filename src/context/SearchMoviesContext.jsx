import { createContext, useState } from "react";
import getMovies from "../api";

const SearchMoviesContext = createContext();

export const SearchMoviesProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeTerm = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
  };
  const fetchMovies = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    try {
      setLoading(true);
      setError(null);
      const Resultmovies = await getMovies(term);
      setMovies(Resultmovies);
      if (Resultmovies.length === 0) {
        setError("No movies found");
      }

      setLoading(false);
    } catch (err) {
      setError(err);
      console.log("Error fetching movies:", err);
      setLoading(false);
    }
  };

  const searchMoviesCtx = {
    term,
    movies,
    handleChangeTerm,
    fetchMovies,
    loading,
    error,
  };
  return (
    <SearchMoviesContext.Provider value={searchMoviesCtx}>
      {children}
    </SearchMoviesContext.Provider>
  );
};
export default SearchMoviesContext;
