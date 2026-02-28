import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Game Night Planner</h1>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

