import { createContext } from "react";

const MoviesContext = createContext({
  movies: [],
  myWatchList: [],
  addMovieToWatchList: ()=>{},
  removeMovieFromWatchList: ()=>{}

});

export const MoviesProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={{}}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
