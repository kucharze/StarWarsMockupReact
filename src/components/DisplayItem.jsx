import React from 'react'

function DisplayItem(props) {
  return (
    <div>
      <h1>The display item</h1>
      <h3>{props.name}</h3>
      <h3>{props.model}</h3>
    </div>
  )
}

export default DisplayItem
