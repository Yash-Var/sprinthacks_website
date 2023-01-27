import React from 'react'
import ellipse from './images/Group 6.png'
import person from './images/Frame.png'

const About = () => {
  return (
    <div>
        <div>
            <h1 className='main text-center text-7xl text-white uppercase p-8'>About us</h1>
        </div>
        <div className='flex justify-between'>
        <div className='relative -top-40'>
          <div>
            <img src={ellipse}  />
          </div>
          <div className='absolute top-56 left-28'>
            <img src={person} className='w-[400px] h-[570px]'/>
          </div>
        </div>
        <div className='abouttext font-semibold text-white w-[600px] h-[495px] text-3xl pt-36 pr-16 mr-0 content-center'>SprintHacks is a 18 hour offline hackathon organized by Developers Student Circuit with endless creativity. Students are challenged to further what they know by creating projects following their passions. Spending time on projects outside the classroom is the best way to not only learn what you love, but also find new interests.</div>
    </div>
    </div>
  
  )
}

export default About