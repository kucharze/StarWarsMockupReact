import axios from "axios";
import React, {useEffect, useState} from 'react'
import PeopleDisplay from "../components/PeopleDisplay";
import MainPerson from "../components/MainPerson";

function People() {
    const [people,setPeople] = useState([])
      const [spec,setSpec] = useState(null)
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
    if(page==null){
        alert("No page to go to in this direction")
        return
    }
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

  const setMain = (name,age) =>{
    console.log("Trying to set specifics")
    setSpec([name,age])
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>People component</h1>
      <div className="main">
        {spec && <MainPerson />}
      </div>
      <div className="peopleDisplay">
        {
            people.map((item)=>{
                return <PeopleDisplay 
                onClick={()=>setMain(item.name,item.birthyear)} key={item.name} name={item.name}/>
            })
        }
      </div>
      <button className="btn"  onClick={()=>{loadPage(prevPage)}}>Prev page</button>
      <button className="btn" onClick={()=>{loadPage(nextPage)}}>Next page</button>
    </div>
  )
}

export default People
