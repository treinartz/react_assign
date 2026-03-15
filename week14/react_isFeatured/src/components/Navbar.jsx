import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title">MyBookApp</div>
      <Link to="/" className="navbar__links">
        Home
      </Link>
      <Link to="about" className="navbar__links">
        About
      </Link>
      <Link to="bookspage" className="navbar__links">
        All Books
      </Link>
    </nav>
  );
}
export default Navbar;
