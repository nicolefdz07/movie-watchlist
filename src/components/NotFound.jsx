import { useContext } from "react";
import SearchMoviesContext from "../context/SearchMoviesContext";



export default function NotFound() {
  const {error} = useContext(SearchMoviesContext);
  return error && (
    <div className="empty not-found">
        <h1>Unable to find what you are looking for. Please try another search.</h1>
      </div>
  );
}
