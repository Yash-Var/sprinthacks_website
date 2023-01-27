import React from 'react'

function Tracks() {
  return (
    <div>
     <div className='mx-auto sm:px-4 my-3 main text-center text-white w-screen'>
      <h1 className='heading heading-top text-center font-normal'>TRACK PRIZES</h1>
      <div className="row flex-wrap  lg:w-full pr-4 pl-4 flex justify-center">
      <div className=" tracks lg:w-1/3 pr-4 pl-4  p-4 text-white text-left  mx-4 mb-4 mt-6 p-4 ">

      <div className="tracks-header inline-flex justify-center mb-2">
      <img src="https://i.ibb.co/D1BpVRV/polygon.png" alt="polygon" border="0" className='header-logo'/>
          <h3  className='heading heading-btm text-center font-normal text-4xl'>POLYGON TRACK PRIZE</h3>
      </div>
        
        <ul className='list'>
            <li font-medium text-2xl>₹10,000 for the best hack built on Ethereum</li>
            <li font-medium text-2xl>₹15,000 for the best hack built on Ethereum + Polygon</li>
            <li font-medium text-2xl>Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</li>
            <li font-medium text-2xl>Know more about the bounty on this <a href='https://polygon.technology/' className="underline text-blue-600 hover:text-blue-800 ">click link!</a> </li>
        </ul>
      </div>

      <div className="tracks lg:w-1/3 pr-4 pl-4  p-4 text-white text-left mx-4 mb-4 mt-6 p-4">
      <div className="tracks-header inline-flex justify-center mb-2">
      <img src="https://i.ibb.co/FYJBp4b/filcoin.png" alt="filcoin" border="0" className='header-logo'/>
          <h3 className='heading heading-btm text-center font-normal text-4xl'>FILECOIN TRACK PRIZE</h3>
      </div>
       
        <ul className='list'>
            <li font-medium text-2xl  >₹20000 for best use of IPFS and/or Filecoin</li>
            <li font-medium text-2xl>Microgrants up to 5000 USD, open grants up to 50,000 USD</li>
            <li font-medium text-2xl>Know more about the bounty on this <a href='https://filecoin.io/' className="underline text-blue-600 hover:text-blue-800 ">click link!</a> </li>
        </ul>
      </div>

      <div className="tracks lg:w-1/3 pr-4 pl-4  p-4 text-white text-left mx-4 mb-4 mt-6 p-4">
      <div className="tracks-header inline-flex justify-center mb-2">
      <img src="https://i.ibb.co/2qsqkZk/solana.png" alt="solana" border="0" className='header-logo'/>
          <h3 className='heading heading-btm text-center font-normal text-4xl'>SOLANA TRACK PRIZE</h3>
      </div>
        
        <ul className='list'>
            <li font-medium text-2xl>Upto $USDC 850 up for grabs, for the best hack built on top of Solana Blockchain at Devfolio-powered community Hackathons.</li>
            <li font-medium text-2xl>young gun - $USDC 100 for the best project beginners just starting out on Solana</li>
            <li font-medium text-2xl>rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code. <a href='https://solana.com/' className="underline text-blue-600 hover:text-blue-800 ">Know More...</a> </li>
        </ul>
      </div>

      <div className=" tracks lg:w-1/3 pr-4 pl-4  p-4 text-white text-left mx-4 mb-4 mt-6 p-4">
      <div className="tracks-header inline-flex justify-center mb-2">
     <img src="https://i.ibb.co/Y22htt1/replit.png" alt="replit" border="0" className='header-logo'/>
          <h3 className='heading heading-btm text-center font-normal text-4xl'>REPLIT TRACK PRIZE</h3>
      </div>
    
        <ul className='list'>
            <li font-medium text-2xl>$50 to winning project of the hackathon (must be deployed on Replit)</li>
            <li font-medium text-2xl>Replit schwags to 5 eligible submissions deployed on Replit.</li>
            <li font-medium text-2xl>Eligibility for internship / full time role interviews at Replit Know more about the bounty on this <a href='https://replit.com/' className="underline text-blue-600 hover:text-blue-800 ">click link!</a> </li>
        </ul>
      </div>


      </div>
    </div>
       
    </div>
  )
}

export default Tracks
