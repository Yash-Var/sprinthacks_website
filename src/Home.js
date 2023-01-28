import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import group from "./images/Group4.png";
const Home = () => {
  return (
    <div className='flex'>
    <div>
        <Navbar />
        <Hero />
    </div>
    <div className=''>
<img src={group} alt="logo" className='fixed'/>
    </div>
    </div>
  )
}

export default Home