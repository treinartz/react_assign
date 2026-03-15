import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import "./css/app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
