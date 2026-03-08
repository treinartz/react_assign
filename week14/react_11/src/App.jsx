import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Featured from "./pages/Featured.jsx";
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
          <Route path="/books" element={<Books />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
