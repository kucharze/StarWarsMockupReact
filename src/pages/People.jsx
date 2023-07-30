import axios from "axios";
import React, {useEffect, useState} from 'react'
import PeopleDisplay from "../components/PeopleDisplay";
import MainPerson from "../components/MainPerson";
import MainLayout from "../components/MainLayout";

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

  const setMain = (name,birth,height,gender,mass,home) =>{
    console.log("Trying to set specifics")
    console.log(home)
    setSpec([name,birth,height,gender,mass,home])
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <MainLayout>
        <h1 className="pageTitle">PROFILES</h1>
      <div id='peopleWrap'>

        <div className="peopleDisplay">
            { loading? <h1>Loading</h1> :
                people.map((item)=>{
                    return <PeopleDisplay 
                    onClick={
                        ()=>{
                            setMain(item.name,item.birth_year,item.height,item.gender,item.mass,item.homeworld)
                        }} 
                    key={item.name} name={item.name}/>
                })
            }
            {/* buttons */}
            <div className="buttonBox">
              <button className="btn"  onClick={()=>{loadPage(prevPage)}}>Prev</button>
              <button className="btn" onClick={()=>{loadPage(nextPage)}}>Next</button>
          </div>

          {/*  */}



        </div> {/* people wrap div */}


            <div className="main">
            {spec && <MainPerson 
            name={spec[0]} birth={spec[1]} height={spec[2]} 
            gender={spec[3]} mass={spec[4]} homeworld = {spec[5]}
            />}
            </div>
              
          
          
          

      </div>
    </MainLayout>
   
  )
}

export default People
