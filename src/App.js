import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SpaceShips from "./pages/SpaceShips";
import People from "./pages/People";
import NavBar from "./components/Navbar";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FilmList from "./pages/FilmsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/characters" element={<People />} />
        <Route path="/spaceships" element={<SpaceShips />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
