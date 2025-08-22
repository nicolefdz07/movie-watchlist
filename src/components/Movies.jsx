import { useContext, useEffect } from "react";
import { FaPlusCircle, FaStar } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import SearchMoviesContext from "../context/SearchMoviesContext";
const url = "https://image.tmdb.org/t/p/w500";
import MoviesContext from "../context/MoviesContext";
import { TbMovie } from "react-icons/tb";
export default function Movies() {
  const { movies } = useContext(SearchMoviesContext);
  const { addMovie, watchList } = useContext(MoviesContext);

  useEffect(() => {
    console.log("Watchlist actual:", watchList);
  }, [watchList]);

  const addMovieToWatchList = (movie) => {
    addMovie(movie);
    console.log("Added movie to watchlist:", movie);
  };
  if (!movies || movies.length === 0) {
    return (
      <div className="empty empty-movies">
        <TbMovie color="#2E2E2F" size={150} />
        <h1>Start Exploring</h1>
      </div>
    );
  }
  return (
    movies && (
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
                      <IoMdAddCircle color="white" size={35} />
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
