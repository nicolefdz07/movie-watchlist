import { useContext } from "react";
import { FaPlusCircle, FaStar } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import SearchMoviesContext from "../context/SearchMoviesContext";
const url = "https://image.tmdb.org/t/p/w500";
export default function Movies() {
  const { movies } = useContext(SearchMoviesContext);

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
                  <button>
                    <span>
                      <IoMdAddCircle color="white" size={35} />
                    </span>
                    Add to Watchlist
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
