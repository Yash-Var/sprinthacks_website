import React from 'react'
import ellipse from './images/Group 6.png'
import person from './images/Frame.png'

const About = () => {
  return (
    <div>
        <div>
            <h1 className='main text-center text-7xl text-white uppercase p-8'>About us</h1>
        </div>
<div className='relative -top-40'>
  <div>
    <img src={ellipse}  /></div>
    <div className='absolute top-56 left-28'>
    <img src={person} className='w-[400px] h-[570px]'/></div>
        </div>

    </div>
  )
}

export default About