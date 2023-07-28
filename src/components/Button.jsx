import React from 'react'

function Button(props) {
  return (
    <img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/shared/arrow_button-7be878062232.svg"
    alt="arrow"
    className='buttonCir'
    onClick={props.changePic}
    />
  )
}

export default Button