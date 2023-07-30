import React from 'react'
import MainLayout from '../components/MainLayout'
import HomePage from '../components/HomePage'
// carousel attempt 2
import starwars from '../models/carouselData'

// console.log(homeImgs)

function Home() {
  // Carousel Attempt
 // console.log('carousel images',starwars)

  return (
    <div>
      <MainLayout>
      {/* CAROUSEL ATTEMPT */}
      <HomePage images={starwars}/>
      </MainLayout>
    </div>
  )
}

export default Home