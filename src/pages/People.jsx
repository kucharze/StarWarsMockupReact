import axios from "axios";
import React, {useEffect, useState} from 'react'

function People() {
    const getData = async () => {
    let data = await axios.get(
        // "https://swapi.dev/api/people/5"
        "https://swapi.dev/api/planets/2/"
        );

    //let item = await data.data;
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default People
