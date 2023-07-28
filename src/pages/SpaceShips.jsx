import axios from "axios";
import React, {useEffect, useState} from 'react'
import DisplayItem from "../components/DisplayItem";

function SpaceShips() {
  const [ships,setShips] = useState([])
  const [spec,setSpec] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)

  const getData = async () => {
    let items=[]
    let data;
    // for(let i=2; i<=5; i++){
        data = await axios.get(
        `https://swapi.dev/api/starships/`
        );

    //let item = await data.data;
    console.log(data.data);

    //items.push(data.data)
    // }
    
    setShips(data.data.results)
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
    
    setShips(data.data.results)
    setNextPage(data.data.next)
    setPrevPage(data.data.previous)
  };

  const setMain = (name,age) =>{

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>The SpaceShips Section</h1>
      <div className="shipDisplay">
        {
            ships.map((item)=>{
                return <DisplayItem key={item.name} 
                name={item.name} model={item.model}
                />
            })
        }
      </div>
      <button className="btn"  onClick={()=>{loadPage(prevPage)}}>Prev page</button>
      <button className="btn" onClick={()=>{loadPage(nextPage)}}>Next page</button>
    </div>
  )
}

export default SpaceShips
