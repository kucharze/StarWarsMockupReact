import React, {  useState} from 'react'
import MainLayout from '../components/MainLayout'
import HomePage from '../components/HomePage'
import homeImgs from '../models/homeImgs'
import Button from '../components/Button'

// console.log(homeImgs)

function Home() {
  // pics
  const [currentPic, setCurrentPic] = useState(homeImgs[0]);
  // count
  const [count, setCount] = useState(0)

  const nextImg = () => {
    let newCount = count + 1
    if(newCount>5){
      newCount = 0
    }
    setCount(newCount)
    setCurrentPic(homeImgs[newCount])
  }

  const prevImg = () => {
    let newCount = count -1
    if(newCount<0){
      newCount = 5
    }
    setCount(newCount )
    setCurrentPic(homeImgs[newCount ])
  }


  return (
    <div>
      <MainLayout>
      <div id='btnWrapper'>
        <div className='leftBtn'>
            <Button changePic={prevImg} />
        </div>
        <div className="rightBtn">
          <Button changePic={nextImg} />
        </div>
           
          </div>
        <div id='homePage'>
          <HomePage count={count} img={currentPic}/> 
        </div>
      </MainLayout>
    </div>
  )
}

export default Home