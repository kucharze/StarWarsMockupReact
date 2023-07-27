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
    </div>
  );
}

export default App;
