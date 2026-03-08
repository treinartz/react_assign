import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand — title and emoji grouped on the left */}
      <div className="navbar__brand">
        <span>📚</span>
        <h4>Book Library</h4>
      </div>

      {/* Links — grouped on the right */}
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/featured">Featured</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
