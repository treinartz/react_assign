import "./css/app.css";
import BookCard from "./components/BookCard.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<BookCard limit={5} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
