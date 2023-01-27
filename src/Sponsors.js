import React from 'react';
import Sponsor from './images/SPONSORS.png';
import Line1 from './images/Line 1.png';
import Gold from './images/Gold.png';
import Line2 from './images/Line 2.png';
import Devfolio from './images/Devfolio.png';
import Polygon from './images/polygon.png';
import Line3 from './images/Line 3.png';
import Silver from './images/Silver.png';
import Line4 from './images/Line 4.png';
import Solana from './images/Solana.png';
import Replit from './images/replit.png';
import filecoin from './images/Filecoin.png';
import Line5 from './images/Line 5.png';
import Bronze from './images/Bronze.png';
import Line6 from './images/Line 6.png';


const Sponsors = () => {
  return (
    <div className='bg-newcolor'>
      <div className='flex justify-center pt-5 pb-10'>
      <img src={Sponsor} alt="sponsors" />
      </div>
      <div className='flex pt-16 pb-10 justify-around'>
        
      <img src={Line1} className="h-2 mt-6 mx-10 overflow-hidden"/>
      <img src={Gold} />
      <img src={Line2}  className="h-2 mt-6 mx-10 overflow-hidden"/>
      </div>
      <div className=' flex justify-center pt-10 pb-10 '>
      <img src={Devfolio} className="pr-5"/> 
      <img src={Polygon} className="pl-5" />
      </div>
      <div className='flex pt-10 pb-10 justify-evenly'>
      <img src={Line3}  className="h-2 mt-7 mx-10 overflow-hidden"/>
      <img src={Silver} />
      <img src={Line4}  className="h-2 mt-7 mx-10 overflow-hidden"/>
      </div>
      <div className='flex justify-center pt-10 pb-10 '>
      <img src={Solana} className="pr-5"/>
      <img src={Replit} className="pr-5 pl-5"/>
      <img src={filecoin} className="pl-5" />
      
      </div>
      <div className='flex pt-10 pb-20 justify-evenly'> 
      <img src={Line5}  className="h-2 mt-5 mx-10 overflow-hidden"/>
      <img src={Bronze} />
      <img src={Line6}  className="h-2 mt-5 mx-10 overflow-hidden"/>

      </div>
    </div>
  )
}

export default Sponsors