

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
