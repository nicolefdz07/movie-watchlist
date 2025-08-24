import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Header() {
  const location = useLocation()
  
  
  return (
    <header className="hero-container">
      <Link to={location.pathname ==='/' ? '/' : '/watchlist'}><h1>{location.pathname === '/' ? 'Find your film' : 'My WatchList'}</h1></Link>
			<Link 
      className="watchlist-link"
      to={ location.pathname === '/watchlist' ? '/' : 'watchlist'}>{location.pathname === '/watchlist' ? 'Search for movies' : 'My WatchList'}</Link>
    </header>
  );
}
