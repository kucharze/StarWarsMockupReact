import React from 'react'

function MainShip(props) {
  return (
    <div className='mainShip'>
      <h1>{props.name}</h1>
      <h2>Model: {props.model}</h2>
      <h2>Max Speed: {props.max_speed}</h2>
    </div>
  )
}

export default MainShip
