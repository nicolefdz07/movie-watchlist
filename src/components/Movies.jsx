import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { TbMovie } from "react-icons/tb";
import MoviesContext from "../context/MoviesContext";
import SearchMoviesContext from "../context/SearchMoviesContext";
import NotFound from "./NotFound";
const url = "https://image.tmdb.org/t/p/w500";
export default function Movies() {
  const { movies, error } = useContext(SearchMoviesContext);
  const { addMovie} = useContext(MoviesContext);

  

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
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-img">
              <img src={`${url}${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
              <div className="movie-title">
                <h2>{movie.title}</h2>
                <p>
                  <FaStar color="#FEC654" /> {movie.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="movie-actions">
                <p>duration</p>
                <p>genre</p>
                <p>
                  <button onClick={() => addMovieToWatchList(movie)}>
                    <span>
                      <IoMdAddCircle color="white" className="add-icon icon" />
                    </span>
                    Watchlist
                  </button>
                </p>
              </div>
              <p className="movie-description">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
