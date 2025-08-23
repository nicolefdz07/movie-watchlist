import { createContext, useState } from "react";
import getMovies, { getMovieDetails } from "../api";

const SearchMoviesContext = createContext();

export const SearchMoviesProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

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
  const fetchMovieDetails = async (movieId) => {
    try {
      const movieDetails = await getMovieDetails(movieId);
      setMovieDetails(movieDetails);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const searchMoviesCtx = {
    term,
    movies,
    handleChangeTerm,
    fetchMovies,
    loading,
    error,
    movieDetails,
    fetchMovieDetails
  };
  return (
    <SearchMoviesContext.Provider value={searchMoviesCtx}>
      {children}
    </SearchMoviesContext.Provider>
  );
};
export default SearchMoviesContext;
