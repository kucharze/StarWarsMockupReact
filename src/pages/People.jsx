import axios from "axios";
import React, {useEffect, useState} from 'react'

function People() {
    const [people,setPeople] = useState([])
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)

    const getData = async () => {
    let data = await axios.get(
        "https://swapi.dev/api/people/"
        // "https://swapi.dev/api/films/"
        // "https://swapi.dev/api/planets/2/"
        );

    //let item = await data.data;
    console.log(data.data);

    setPeople(data.data.results)
    setNextPage(data.data.next)
    setPrevPage(data.data.previous)
  };

    const loadPage = async (page) => {
    let data;
    // for(let i=2; i<=5; i++){
        data = await axios.get(
        page
        );

    //let item = await data.data;
    //console.log(data.data);

    //items.push(data.data)
    // }
    
    setPeople(data.data.results)
    setNextPage(data.data.next)
    setPrevPage(data.data.previous)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>People component</h1>
      {
        people.map((item)=>{
            return <h1 key={item.name}>{item.name}</h1>
        })
      }
    </div>
  )
}

export default People
