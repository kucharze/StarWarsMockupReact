import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  // star wars logo
  const logo = {
    imgBig: 'https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254',
    imgLong: 'https://lumiere-a.akamaihd.net/v1/images/sw_logo_horiz_2x-f98247cb30aa_c622cfa9.png?region=0,0,732,75',
    // huge *reSize
    tiktok: 'https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C150%2C150',
    insta: 'https://static-mh.content.disney.io/matterhorn/assets/starwars/footer/instagram-777ba125c2e7.svg',
    twitter: 'https://static-mh.content.disney.io/matterhorn/assets/starwars/footer/twitter-071e0eb095b3.svg',
    facebook: 'https://static-mh.content.disney.io/matterhorn/assets/starwars/footer/facebook-0555f4e591a5.svg',
    youtube: 'https://static-mh.content.disney.io/matterhorn/assets/starwars/footer/youtube-a3728986e4b2.svg',
    kids: 'https://static-mh.content.disney.io/matterhorn/assets/starwars/footer/kids-4a568b676f8f.svg', 
  }


  return (
    <div id='navBar'>
      {/* left */}
      <div id='miniWrapper'>
        <div className='tiktokBox'>
          <a href='https://www.tiktok.com/@starwars'>
            <img src={logo.tiktok} alt="minilogos" className='miniTikTok'/>
          </a>
        </div>
        <a href='https://www.instagram.com/starwars/'>
          <img src={logo.insta} alt="minilogos"/>
        </a>
        <a href='https://twitter.com/starwars'>
          <img src={logo.twitter} alt="minilogos"/>
        </a>
        <a href='https://www.facebook.com/StarWars'>
          <img src={logo.facebook} alt="minilogos"/>
        </a>
        <a href='https://www.youtube.com/user/starwars'>
          <img src={logo.youtube} alt="minilogos"/>
        </a>
        <div className='miniLine'></div>
        {/* <a href='https://www.starwarskids.com/'> */}
        <Link to={'/kidscoloring'}>
         <img src={logo.kids} alt="minilogos" className='kids'/>
        </Link>
         
        {/* </a> */}
      </div>
      {/* middle */}
      <Link to='/'>
        <img src={logo.imgBig} alt="logo" className='logo'/>
      </Link>
      {/* right */}
      <ul id='navUl'>
        <li><Link to='/films'>FILMS</Link></li>
        <li><Link to='/characters'>CHARACTERS</Link></li>
        <li><Link to='/spaceships'>SPACESHIPS</Link></li>  
      </ul>
    </div>
  )
}

export default NavBar