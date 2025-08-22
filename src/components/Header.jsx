import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="hero-container">
      <Link to='/'><h1>Find your film</h1></Link>
			<Link to='watchlist'>My watchlist</Link>
    </header>
  );
}
