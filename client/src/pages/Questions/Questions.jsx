import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'
// import Home from '../Home/Home'

const Questions = () => {
  return (
    <div className='home-container-1'>
     <LeftSidebar />
      <div className='home-container-2'>
     <HomeMainbar />
      <RightSidebar />
      </div>
    </div>
    // <div>
    //     <Home />
    // </div>
  )
}

export default Questions