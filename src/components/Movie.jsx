
import { FaStar } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineRemoveCircle } from "react-icons/md";
const url = "https://image.tmdb.org/t/p/w500";
export default function Movie({movies, action, operation}){


  return (
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
                    <p>{movie.release_date.split("-")[0]}</p>
                    <p>
                      <button onClick={() => action(movie)}>
                        <span>
                          { operation === 'add' ? <IoMdAddCircle color="white" className="add-icon icon" /> : 
                          <MdOutlineRemoveCircle className="icon" />}
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
}