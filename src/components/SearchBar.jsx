import SearchMoviesContext from "../context/SearchMoviesContext";
import { useContext } from "react";

export default function SearchBar() {
   
  const { term, handleChangeTerm, fetchMovies } =
    useContext(SearchMoviesContext);
     
  return (
    <form className="search-bar" onSubmit={fetchMovies}>
      <input
        value={term}
        onChange={handleChangeTerm}
        type="text"
        placeholder="Blade Runner"
      />
      <button type="submit">Search</button>
    </form>
  );
}
