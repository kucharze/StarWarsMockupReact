import React from 'react'

function MainPerson(props) {
  return (
    <div>
        <h1>Main person</h1>
      <h1>{props.name}</h1>
    </div>
  )
}

export default MainPerson
