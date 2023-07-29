import React from 'react'

function Color(props) {
  return (
    <div>
      <img src={props.color} alt="coloringPic" className='Coloritem'/>
    </div>
  )
}

export default Color
