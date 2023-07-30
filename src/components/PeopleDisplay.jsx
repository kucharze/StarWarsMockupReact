import React from 'react'

function PeopleDisplay(props) {
  return (
    <div className='people' onClick={props.onClick}>
      <p>{props.name}</p>
      <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/icons/view_all_icon-ddd4c2e76fa3.svg" alt="arrow" className='profileArrow'/>
    </div>
  )
}

export default PeopleDisplay
