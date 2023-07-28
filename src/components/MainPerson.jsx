import React, {useState, useEffect} from 'react'
import axios from "axios";

function MainPerson(props) {
    const [homeWorld,setHomeworld] = useState(null)
    const [loading, setLoading] = useState(false)

    const loadPage = async () => {

        setLoading(true)
        console.log("In load page main person")

        let data= await axios.get(props.homeworld);
        console.log(data.data)

        setHomeworld(data.data)

        setLoading(false)

    };

    useEffect(()=>{
        loadPage()
    },[props.name])

  return (
    <div className='MainPerson'>
      <h1>{props.name}</h1>
      <h2>Birthyear: {props.birth}</h2>
      <h2>Height: {props.height} meters</h2>
      <h2>Gender: {props.gender}</h2>
      <h2>Mass: {props.mass} kg</h2>
      <h2>Homeworld: {!loading ? homeWorld.name : "Loading"}</h2>
    </div>
  )
}

export default MainPerson
