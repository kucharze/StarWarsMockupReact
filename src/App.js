import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const getData = async () => {
    let data = await axios.get("https://swapi.dev/api/starships/5");

    //let item = await data.data;
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Star wars</h1>
      <h1>Header</h1>
      <h2>--Home Link</h2>
      <h2>--Films link</h2>
      <h2>--Database link</h2>
      <h2>--Star ships Link</h2>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
