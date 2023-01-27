import React from 'react'
import logo from '../src/Vector.png'
const Navbar = () => {
  return (
    <div className='flex bg-newcolor  mr-14 navbar content-evenly'>
        <div className='ml-4'>
        <img src={logo}></img>
      </div>
      <div className='flex mr-25 text-white justify-end space-x-4 h-14  text-2xl items-end'>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>PRIZES</a>
        <a>TRACKS</a>
        <a>FAQs</a>
        <a>SPONSORS</a>
        <a>CONTACT US</a>
        </div>
    </div>
  )
}

export default Navbar