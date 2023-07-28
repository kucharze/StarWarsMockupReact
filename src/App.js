import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import SpaceShips from "./pages/SpaceShips";
import People from "./pages/People";

function App() {
  return (
    <div className="App">
      <h1>Star wars</h1>
      <h1>Header</h1>
      <h2>--Home Link</h2>
      <h2>--Films link</h2>
      <h2>--Database link</h2>
      <People />
      <h2>--Star ships Link</h2>
      <SpaceShips />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
