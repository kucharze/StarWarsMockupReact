import axios from "axios";
import React, {useEffect, useState} from 'react'

function SpaceShips() {
  const [ships,setShips] = useState([])

  const getData = async () => {
    let data = await axios.get(
        "https://swapi.dev/api/starships/5"
        );

    //let item = await data.data;
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>The SpaceShips Section</h1>
    </div>
  )
}

export default SpaceShips
