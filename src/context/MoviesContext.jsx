import { createContext, useReducer } from "react";

const MoviesContext = createContext({
  myWatchList: [],
  addMovieToWatchList: ()=>{},
  removeMovieFromWatchList: ()=>{}

});

function WatchListReducer(state, action){
  switch(action.type){
    case "ADD_MOVIE": {
      const existingMovieIndex = state.myWatchList.findIndex((movie)=> movie.id === action.movie.id);

      let updatedWatchList = [...state.myWatchList];
      if(existingMovieIndex > -1){ //si ya esta la pelicula en la watchlist no se agregara
        return {
          ...state,
          myWatchList: updatedWatchList
        };
      }else{
        return {
          ...state,
          myWatchList: [...updatedWatchList, action.movie]
        }
      }
    }
    case "REMOVE_MOVIE": {
      const updatedWatchList = state.myWatchList.filter((movie)=> movie.id !== action.movie.id);
      return {
        ...state,
        myWatchList: updatedWatchList
      };
    }
    case "CLEAR_WATCHLIST": {
      return {
        ...state,
        myWatchList: []
      };
    }
    default:
      return state;
  }
}
export const MoviesProvider = ({ children }) => {
  const [watchlistState, dispatch] = useReducer(WatchListReducer, {
    myWatchList: []
  });

  const addMovie = (movie)=>{
    dispatch({type: "ADD_MOVIE", movie})
    
  }
  const removeMovie = (movie)=>{
    dispatch({type: "REMOVE_MOVIE", movie})
  }
  const clearWatchList = ()=>{
    dispatch({type: "CLEAR_WATCHLIST"})
  }

  const watchlistContext = {
    watchList: watchlistState.myWatchList,
    addMovie,
    removeMovie,
    clearWatchList
  };

  return (
    <MoviesContext.Provider value={watchlistContext}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
