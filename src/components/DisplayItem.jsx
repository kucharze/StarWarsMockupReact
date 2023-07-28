import React from 'react'

function DisplayItem(props) {
  return (
    <div className='Ship'>
      <h2>{props.name}</h2>
      <h3>{props.model}</h3>
    </div>
  )
}

export default DisplayItem
