import React, {useState, useEffect} from 'react'

function MainPerson(props) {
    const [home,setHome] = useState(props.homeworld)
  return (
    <div className='MainPerson'>
      <h1>{props.name}</h1>
      <h2>Birthyear: {props.birth}</h2>
      <h2>Height: {props.height} meters</h2>
      <h2>Gender: {props.gender}</h2>
      <h2>Mass: {props.mass} kg</h2>
      <h2>Homeworld</h2>
      <button>Load homeworld</button>
    </div>
  )
}

export default MainPerson
