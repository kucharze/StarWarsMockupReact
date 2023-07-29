import React from 'react'
import MainLayout from '../components/MainLayout'
import Color from '../components/Color'

function Coloring() {
  return (
    <MainLayout>
        <div>
            Hello
            <div className='Coloringlist'>
                <Color/>
            </div>
        </div>
    </MainLayout>
  )
}

export default Coloring
