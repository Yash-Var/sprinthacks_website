import React from 'react'
import ellipse from './images/Group 6.png'
import person from './images/Frame.png'

const About = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <h1 className='main text-center text-7xl text-white uppercase p-8'>About us</h1>
      </div>
      <div className='flex justify-between items-center main_about'>
        <div className='relative'>
          <div className='flex'>
            <img src={ellipse} className='w-[56rem] h-[64rem] image_about_2'  />
            <img src={person} className='w-[500px] h-[570px] absolute top-48 left-80 image_about' />
          </div>

        </div>
        <div className='abouttext font-semibold text-white w-[600px] text-4xl mr-48 content-center content_about'>SprintHacks is a 18 hour offline hackathon organized by Developers Student Circuit with endless creativity. Students are challenged to further what they know by creating projects following their passions. Spending time on projects outside the classroom is the best way to not only learn what you love, but also find new interests.</div>
      </div>
    </div>

  )
}

export default About