import React from 'react'
import { Link } from 'react-router-dom'
import CreditContainer from './CreditContainer'
function Footer() {
  return (
    <div id='footerWrapper'>
      {/* <h1> footer here </h1> */}
      {/* <a href="https://github.com/kucharze/StarWarsMockupReact">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="gitHub Logo" className='gitHub'/></a> */}
    <div className='footerBox'>
      <h1><Link to='/crawl' className='footU'>CODE WARS</Link></h1>
      <p className='epiSode'>Episode XCIII </p>
      <div className="footerLinks">
        <p className='one'><a href='https://swapi.dev/' className='footerLink'>SWAPI, Star Wars API</a></p>
        <p className='two'><a href='https://www.omdbapi.com/' className='footerLink'>OMBDI</a></p>
        <p><a href="https://github.com/kucharze/StarWarsMockupReact" className='footerLink'>Link to Repository</a></p>
      </div>
      <p className='tradeM'>TM & © Lucasfilm Ltd. All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer