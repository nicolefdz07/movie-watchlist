const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "https://api.themoviedb.org/3";

export default async function getMovies(query) {
  const endpoint = "/search/movie";
  try {
    const res = await fetch(
      `${API_URL}${endpoint}?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

const getMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const details = {
      genres: data.genres.map(genre => genre.name).join(', '),
      runtime: data.runtime
    };
    return details;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {};
  }
};

export { getMovieDetails };
// GET https://api.themoviedb.org/3/movie/{movie_id}?api_key=TU_API_KEY&language=es-ES



// GET https://api.themoviedb.org/3/movie/{movie_id}?api_key=TU_API_KEY&language=es-ES
