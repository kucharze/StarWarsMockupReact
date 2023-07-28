import React from 'react'
import NavBar from './Navbar'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout