import React from 'react'
import C from './images/crrr.png'
const Cards3 = () => {
  return (
    <div>
        <div className='flex m-auto rounded-t justify-center mt-48 mb-48 bg-fotter  w-[1100px] h-[600px]  '>
        <div>
            <img src={C} className='h-[400px] ml-24 mt-20 w-[1750px]'></img>
        </div>
        <div className='ml-72 mt-24'>
        <h1 className='text-white main text-6xl semibold mr-40 '>Open Innvation</h1>
        <p className='abouttext text-white text-3xl semibold pt-8 mr-24'>The increase in patients has led to the decrease in the relative number of doctors per patient which results in a vicous cycle where ignored or delayed diagnostics of an ailment makes the patient more dependent on doctor's check-up. Some also cannot afford to visit a doctor.</p>
        </div>
    </div>
    </div>
  )
}

export default Cards3