import React from 'react'

function Footer() {
  return (
    <div id='footerWrapper'>
      {/* <h1> footer here </h1> */}
      <a href="https://github.com/kucharze/StarWarsMockupReact">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="gitHub Logo" className='gitHub'/></a>
      <div className="footerLinks">
        <p className='one'><a href='https://swapi.dev/' className='footerLink'>SWAPI, Star Wars API</a></p>
        <p><a href='https://www.omdbapi.com/' className='footerLink'>OMBDI</a></p>
      </div>
      <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
    </div>
  )
}

export default Footer