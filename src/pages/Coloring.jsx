import React from 'react'
import MainLayout from '../components/MainLayout'
import Color from '../components/Color'
import colorList from '../models/colorlist'

function Coloring() {
  return (
    <MainLayout>
        <div>
            <h2>Coloring pages</h2>
            <div className='Coloringlist'>
                {
                    colorList.map((item,i)=>{
                        return <Color color={item} key={i}/>
                    })
                }
                
            </div>
        </div>
    </MainLayout>
  )
}

export default Coloring
