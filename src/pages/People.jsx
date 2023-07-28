import axios from "axios";
import React, {useEffect, useState} from 'react'
import PeopleDisplay from "../components/PeopleDisplay";
import MainPerson from "../components/MainPerson";

function People() {
    const [people,setPeople] = useState([])
    const [spec,setSpec] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [loading, setLoading] = useState(true)

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


    setLoading(false)

  };

    const loadPage = async (page) => {

    if(page==null){
        alert("No page to go to in this direction")
        return
    }
    setLoading(true)
    let data= await axios.get(page);

    
    setPeople(data.data.results)
    setNextPage(data.data.next)
    setPrevPage(data.data.previous)


    setLoading(false)

  };

  const setMain = (name,birth,height,gender,mass) =>{
    console.log("Trying to set specifics")
    setSpec([name,birth,height,gender,mass])
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>People component</h1>
      <div className="main">
        {spec && <MainPerson 
        name={spec[0]} birth={spec[1]} height={spec[2]} 
        gender={spec[3]} mass={spec[4]}
        />}
      </div>
      <button className="btn"  onClick={()=>{loadPage(prevPage)}}>Prev page</button>
      <button className="btn" onClick={()=>{loadPage(nextPage)}}>Next page</button>
      <div className="peopleDisplay">
        { loading? <h1>Loading</h1> :
            people.map((item)=>{
                return <PeopleDisplay 
                onClick={
                    ()=>{
                        setMain(item.name,item.birth_year,item.height,item.gender,item.mass)
                    }} 
                key={item.name} name={item.name}/>
            })
        }
      </div>

    </div>
  )
}

export default People
