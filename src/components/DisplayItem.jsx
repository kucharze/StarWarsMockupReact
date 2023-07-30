import React from 'react'

function DisplayItem(props) {
  return (
    <div className='Ship' onClick={props.onClick}>
      <div >
      <h2>{props.name}</h2>
      <h4 className='shipModel'>Model: <span>{props.model}</span></h4>
      </div>
      <div className='shipArrow'>
      <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/icons/view_all_icon-ddd4c2e76fa3.svg" alt="arrow" className='profileArrow2'/>
      </div>
    </div>
  )
}

export default DisplayItem
