import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
const url = "https://image.tmdb.org/t/p/w500";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
export default function WatchList(){
  const { watchList, removeMovie } = useContext(MoviesContext);

  const removeMovieFromWatchList = (movie) => {
    
    removeMovie(movie);
  };

  return watchList.length > 0 && (
    <div className="movies-grid">
            {watchList.map((movie) => (
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
                      <button onClick={() => removeMovieFromWatchList(movie)}>
                        <span>
                          <MdOutlineRemoveCircle color="white" size={35}/>
                        </span>
                        Remove 
                      </button>
                    </p>
                  </div>
                  <p className="movie-description">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
  )
}