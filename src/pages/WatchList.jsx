import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
export default function WatchList(){
  const { watchList, removeMovie } = useContext(MoviesContext);

  const removeMovieFromWatchList = (movie) => {
    
    removeMovie(movie);
  };

  return watchList.length > 0 ? (
    <Movie movies={watchList} action={removeMovieFromWatchList} operation='remove'/>
  ) : (
    <div className="empty empty-watchlist">
      <h1>Your watchlist is looking a little empty...</h1>
      <Link to='/'><span><IoMdAddCircle color="white" size={35} /></span>Lets add some movies!</Link>
    </div>
  )
}