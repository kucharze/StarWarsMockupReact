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
    setCount(count +1)
    setCurrentPic(homeImgs[count])
  }

  const prevImg = () => {
    setCount(count -1)
    setCurrentPic(homeImgs[count])
  }


  return (
    <div>
      <MainLayout>
      <div id='btnWrapper'>
        <div className='leftBtn'>
            <Button changePic={prevImg} />
        </div>
            <Button changePic={nextImg} />
          </div>
        <div id='homePage'>
          <HomePage count={count} img={currentPic}/> 
        </div>
      </MainLayout>
    </div>
  )
}

export default Home