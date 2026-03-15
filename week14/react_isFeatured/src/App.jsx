import "./css/app.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <h3>Hello World!</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookspage" element={<BooksPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
