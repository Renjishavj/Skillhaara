import React from 'react'
import TopTechnologies from './TopTechnologies'
import Baner from './Baner'
import Trending from './Trending'
import Why from './Why'
import SubBanner from './SubBanner'

function Technologies() {
  return (
    <>
   <div className='tech-main'>
   <Baner/>
   <SubBanner/>
   <h1 className='top-tech'>Top Technologies Offered</h1>
   <TopTechnologies/>
    <Trending/>
    
    <Why/>
   </div>
    </>
  )
}

export default Technologies
