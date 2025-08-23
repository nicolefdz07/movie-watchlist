import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import Movie from "./Movie";
import { IoMdAddCircle } from "react-icons/io";
import { TbMovie } from "react-icons/tb";
import MoviesContext from "../context/MoviesContext";
import SearchMoviesContext from "../context/SearchMoviesContext";
import NotFound from "./NotFound";
export default function Movies() {
  const { movies, error } = useContext(SearchMoviesContext);
  const { addMovie } = useContext(MoviesContext);

  const addMovieToWatchList = (movie) => {
    addMovie(movie);
  };
  if (error) {
    return <NotFound />;
  }
  if (!movies || movies.length === 0) {
    return (
      <div className="empty empty-movies">
        <TbMovie color="#2E2E2F" size={150} />
        <h1>Start Exploring</h1>
      </div>
    );
  }

  return (
    movies &&
    movies.length > 0 && (
      <Movie movies={movies} action={addMovieToWatchList} operation='add'/>
    )
  );
}
