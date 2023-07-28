import React from 'react'

function MainPerson(props) {
  return (
    <div className='MainPerson'>
      <h1>{props.name}</h1>
      <h2>Birthyear: {props.birth}</h2>
      <h2>Height: {props.height} meters</h2>
      <h2>Gender: {props.gender}</h2>
    </div>
  )
}

export default MainPerson
