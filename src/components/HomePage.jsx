import React, { useEffect, useState } from 'react'

function HomePage({images}) {

  const [currentPic, setCurrentPic] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      nextImg();
    }, 8000)
  })

  // functionality
  const nextImg = () => {
    if(currentPic === images.length - 1){
      setCurrentPic(0)
    }else{
      setCurrentPic(currentPic + 1);
    }
  }

  const prevImg = () => {
    if(currentPic === 0){
      setCurrentPic(images.length - 1)
    }else{
      setCurrentPic(currentPic - 1);
    }
  }

  //console.log(currentPic)

  return (
    // <div id='carouselAttempt'>
    //   {/* <h1>THIS IS THE HOME PAGE</h1> */}
    //   <img src={props.img[props.count]} alt="images" className='imgSize'/>
    // </div>

    // carousel 2 attempt
    <div className='carousel'>
      {/* CAROUSEL 2 ATTEMPT */}
      <div className='carouselWrapper'>
      {images.map((card, i) =>{
        return (
          <div key={i} className={i === currentPic ? 'card cardActive' : 'card'}>
            <img src={"../../public/images/darth.jpeg"} alt="characters" className='carouselImg'/>
            <div className='cardTextBox'>
              <h2 className='cardTitle'>{card.name}</h2>
            </div>
          </div>
        );
      })}
      <div className="arrowLeft" onClick={prevImg}>&lsaquo;</div>
      <div className="arrowRight" onClick={nextImg}>&lsaquo;</div>
      </div>
    </div>
  )
}

export default HomePage