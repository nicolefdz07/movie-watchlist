import {createContext, useState} from 'react';
import getMovies from '../api';

const SearchMoviesContext = createContext();

export const SearchMoviesProvider = ({children})=>{
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const handleChangeTerm = (e)=>{
    const newTerm = e.target.value;
    setTerm(newTerm);
  }
  const  fetchMovies = async(e)=>{
    e.preventDefault();
    if (!term.trim()) return;

    setLoading(true);
    const Resultmovies = await getMovies(term)
    setMovies(Resultmovies);
    setLoading(false);
    

  }
  
  const searchMoviesCtx = {
    term,
    movies,
    handleChangeTerm,
    fetchMovies,
    loading,
    
  }
  return(
    <SearchMoviesContext.Provider value={searchMoviesCtx}>
      {children}
    </SearchMoviesContext.Provider>
  )
}
export default SearchMoviesContext;