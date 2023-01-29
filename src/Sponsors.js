import React from 'react';
import Line from './images/Line 1.png';
import Devfolio from './images/Devfolio.png';
import Polygon from './images/polygon.png';
import Solana from './images/Solana1.png';
import Replit1 from './images/replit1.png';
import Replit2 from './images/replit2.png';
import filecoin from './images/filecoin.png';


const Sponsors = () => {
  return (
    <div className='bg-newcolor'>
      <div className='flex justify-center pt-5 pb-10'>
      <h1 className='text-white text-7xl main'> SPONSORS</h1>
      </div>
      <div className='flex pt-16 pb-10 justify-around'>
        
      <img src={Line} className="h-2 mt-6 mx-10 overflow-hidden "/>
      <h1 className='text-white text-6xl main'>GOLD</h1>
      <img src={Line}  className="h-2 mt-6 mx-10 overflow-hidden "/>
      </div>
      <div className=' flex justify-center pt-10 pb-10 '>
      <button type="button" className="bg-[#273339] rounded-lg  px-20 py-5 mr-3">
        <div className='flex space-x-2'>
          <div>
        <img  src={Devfolio}/>
          </div>
          <h1 className="text-4xl font-bold Sponsors pt-1 text-white">
                 Devfolio
                </h1>
        </div>
      </button>
      <button type="button" className="bg-[#273339] rounded-lg  px-20 py-5 ml-3  max-md:hidden">
        <div className='flex space-x-2'>
          <div>
        <img  src={Polygon}/>
          </div>
          <h1 className="text-3xl font-bold  Sponsors navbar pt-1 text-white">
                 polygon
                </h1>
        </div>
      </button>
    
      </div>
      <div className='flex justify-center'>
      <button type="button" className="bg-[#273339] rounded-lg  px-24 py-5 mr-2  md:hidden">
        <div className='flex space-x-2'>
          <div>
        <img  src={Polygon}/>
          </div>
          <h1 className="text-3xl font-bold  Sponsors navbar pt-1 text-white">
                 polygon
                </h1>
        </div>
      </button>
      </div>
      <div className='flex pt-10 pb-10 justify-evenly'>
      <img src={Line}  className="h-2 mt-7 mx-10 overflow-hidden "/>
     <h1 className='text-white text-6xl main'>SILVER</h1>
      <img src={Line}  className="h-2 mt-7 mx-10 overflow-hidden "/>
      </div>
      <div className='flex justify-center pt-10 pb-10 '>
      <button type="button" className="bg-[#273339] rounded-lg  px-5 py-5 mr-3">
        <div className='flex space-x-1'>
         
        <img  src={Solana}/>
          
        </div>
      </button>
      <button type="button" className="bg-[#273339] rounded-lg  px-24 py-5 ml-3 mr-3 max-md:hidden">
        <div className='flex space-x-1'>
          <div>
        <img  src={Replit1}/>
          </div>
          <h1 className="text-2xl Sponsors pt-1 text-white">
                 replit
          </h1>
          <div>
        <img  src={Replit2}/>
          </div>
        </div>
      </button>
     
      <button type="button" className="bg-[#273339] max-lg:hidden rounded-lg  px-24 py-5 ml-3">
        <div className='flex space-x-2'>
          <div>
        <img  src={filecoin}/>
          </div>
          <h1 className="text-2xl font-bold Sponsors pt-2 text-white">
                 Filecoin
                </h1>
        </div>
      </button>
      
      </div>
       <div className='flex justify-center mb-10'>
      <button type="button" className="bg-[#273339] rounded-lg  px-28 py-6 ml-3 mr-6 md:hidden">
        <div className='flex space-x-1'>
          <div>
        <img  src={Replit1}/>
          </div>
          <h1 className="text-2xl Sponsors pt-1 text-white">
                 replit
          </h1>
          <div>
        <img  src={Replit2}/>
          </div>
        </div>
      </button>
      </div>
      <div className='flex justify-center '>
      <button type="button" className="bg-[#273339] lg:hidden rounded-lg  px-24 py-5 mr-2">
        <div className='flex space-x-2'>
          <div>
        <img  src={filecoin}/>
          </div>
          <h1 className="text-2xl font-bold Sponsors pt-2 text-white">
                 Filecoin
                </h1>
        </div>
      </button>
      </div>
      <div className='flex pt-10 pb-20 justify-evenly'> 
      <img src={Line}  className="h-2 mt-5 mx-10 overflow-hidden "/>
    <h1 className='text-white text-6xl main'>BRONZE</h1>
      <img src={Line}  className="h-2 mt-5 mx-10 overflow-hidden "/>

      </div>

    </div>
  )
}

export default Sponsors