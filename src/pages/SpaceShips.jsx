import axios from "axios";
import React, {useEffect, useState} from 'react'
import DisplayItem from "../components/DisplayItem";
import MainShip from "../components/MainShip";
import MainLayout from "../components/MainLayout";

function SpaceShips() {
  const [ships,setShips] = useState([])
  const [spec,setSpec] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    let data= await axios.get(`https://swapi.dev/api/starships/`);

    //console.log(data.data);
    
    setShips(data.data.results)
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

    
    setShips(data.data.results)
    setNextPage(data.data.next)
    setPrevPage(data.data.previous)

    setLoading(false)
  };

  const setMain = (name,mod,speed,cargo,cost,created) =>{
    // console.log(cost)
    setSpec([name,mod,speed,cargo,cost,created])
  }
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout>
      <div>
        <h1>Spaceships</h1>
        {
          spec && <MainShip name={spec[0]} model={spec[1]} 
          max_speed={spec[2]} cargo={spec[3]} credits={spec[4]} created={spec[5]}/>
        }
        <button className="btn"  onClick={()=>{loadPage(prevPage)}}>Prev page</button>
        <button className="btn" onClick={()=>{loadPage(nextPage)}}>Next page</button>
        <h2>Learn about the Spaceships in this universe</h2>
        <div className="shipDisplay">
          {
              loading? <h1>Loading</h1> :
              ships.map((item)=>{
                  return <DisplayItem key={item.name} 
                  name={item.name} model={item.model}
                  onClick={()=>{
                      setMain(item.name,item.model,
                          item.max_atmosphering_speed,item.cargo_capacity,
                          item.cost_in_credits, item.created
                      )
                  }}
                  />
              })
          }
        </div>

      </div>
    </MainLayout>
  )
}

export default SpaceShips
