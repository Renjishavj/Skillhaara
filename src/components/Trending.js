import React from 'react'
import TopTrending from './TopTrending'
import "../assets/styles/style.css"
function Trending() {
  return (
    <>
        <div className='top-section'>
        <hr className='top-hr'/>
        <h1 className='top-tech'>Trending Courses</h1>
        <hr className='top-hr'/>
   </div>
      <TopTrending/>
    </>
  )
}

export default Trending
