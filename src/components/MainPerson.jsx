import React, {useState, useEffect} from 'react'
import axios from "axios";

function MainPerson(props) {
    const [homeWorld,setHomeworld] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadPage = async () => {

        setLoading(true)
        //console.log("In load page main person")

        let data= await axios.get(props.homeworld);
        //console.log(data.data)

        setHomeworld(data.data)

        setLoading(false)

    };

    useEffect(()=>{
        loadPage()
    },[props.name])

  return (
    <div className='MainPerson'>
      <h1 className='mainName'>{props.name}</h1>
      <br />
      <h4>Birthyear :<span>{props.birth}</span></h4>
      <h4>Height: <span>{props.height} meters</span></h4>
      <h4>Gender: <span>{props.gender}</span></h4>
      <h4>Mass: <span>{props.mass} kg</span></h4>
      <h4>Homeworld: <span>{!loading ? homeWorld.name : "Loading"}</span></h4>
    </div>
  )
}

export default MainPerson
