import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import group from "./images/Group4.png";
const Home = () => {
  return (
    <div className='  overflow-hidden'>
    <div className='flex'>
        {/* <Navbar /> */}
        <Hero />
    </div>
    <div className=''>
{/* <img src={group} alt="logo" className=' image_hero'/> */}
    </div>
    </div>
  )
}

export default Home