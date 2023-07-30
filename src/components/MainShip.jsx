import React from 'react'

function MainShip(props) {
  return (
    <div className='mainShip'>
    <div className='mainShip'>
      <h1 className='mainName'>{props.name}</h1>
      <div id='shipInfoBox'>
        <div className='shipInfo'>
          <h4>Model: <span>{props.model}</span></h4>
          <h4>Max Speed: <span>{props.max_speed}</span> km/h</h4>
          <h4>Cargo Capacity: <span>{props.cargo}</span> units</h4>
          <h4>Cost in credits: <span>{props.credits}</span> credits</h4>
          <h4>Created: <span>{props.created}</span></h4>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default MainShip
