import React from 'react'
import MainImage from '../src/images/MainImage.png'
import path268 from '../src/images/path268.png'
import shade from './images/Shape.png'
const Hero = () => {
  return (
    <div className='bg-newcolor flex  w-full h-screen pl-5'>
<div className=''>
<img src={MainImage} alt="images " className='absolute left-24 bottom-1'  />
<img src={shade} alt="shade" className='top-2/3'  />
</div>
<img src={path268} alt="path"  className='w-7 h-7 absolute left-72  top-8 ' />
    </div>
  )
}

export default Hero