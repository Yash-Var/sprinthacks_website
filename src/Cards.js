import React from 'react'
import Bank from './images/bank.png'
const Cards = ({image,heading, text}) => {
  return (
    <div>
      {console.log(heading)}
         <div className='flex m-auto rounded-t justify-center mt-48 mb-48 bg-fotter w-[1100px] h-[600px] '>
        <div>
            <img src={image} className='h-[508px] ml-24 w-[1800px]'></img>
        </div>
        <div className='ml-72 mt-20 '>
        <h1 className='text-white main text-7xl semibold mr-40'>{heading}</h1>
        <p className='abouttext text-white text-4xl semibold pt-8 mr-24'>{text}</p>
        </div>
    </div>
    </div>
  )
}

export default Cards