import React from 'react'

function PeopleDisplay(props) {
  return (
    <div className='people' onClick={props.onClick}>
      <h1>{props.name}</h1>
    </div>
  )
}

export default PeopleDisplay
