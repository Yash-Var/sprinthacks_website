import React from 'react'
import ellipse from './images/Ellipse.png'
import ellipse3 from './images/Ellipse3.png'
const About = () => {
  return (
    <div>
        <div>
            <h1 className='main text-center text-7xl text-white uppercase p-8'>About us</h1>
        </div>
<div className='relative'>
      <ul>
    <img src={ellipse3} alt="absolute z-10" />
    <img src={ellipse} alt="absolute z-0 -top-4 right-2" />
    </ul>
        </div>

    </div>
  )
}

export default About