import React from 'react'

function MainShip(props) {
  return (
    <div className='mainShip'>
      <h1>{props.name}</h1>
      <h2>Model: {props.model}</h2>
      <h2>Max Speed: {props.max_speed} km/h</h2>
      <h2>Cargo Capacity: {props.cargo} units</h2>
      <h2>Cost in credits: {props.credits} credits</h2>
      <h2>Created: {props.created}</h2>
    </div>
  )
}

export default MainShip
