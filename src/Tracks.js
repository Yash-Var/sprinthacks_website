import React from 'react'
import './Tracks.css'

function Tracks() {
  return (
    <div>
    <div className='container my-3 main'>
      <h1 className='heading heading-top'>TRACK PRIZES</h1>
      <div className="row col-lg-12">
      <div className=" tracks col-lg-4">

      <div className="tracks-header">
      <a className='logo' href="https://polygon.technology/"><img src="https://i.ibb.co/D1BpVRV/polygon.png" alt="polygon" border="0"/></a>
          <h3  className='heading heading-btm'>POLYGON TRACK PRIZE</h3>
      </div>
        
        <ul>
            <li>₹10,000 for the best hack built on Ethereum</li>
            <li>₹15,000 for the best hack built on Ethereum + Polygon</li>
            <li>Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</li>
            <li>Know more about the bounty on this<a href='/'>click link!</a> </li>
        </ul>
      </div>

      <div className="tracks">
      <div className="tracks-header">
      <a  className='logo' href="https://filecoin.io/"><img src="https://i.ibb.co/FYJBp4b/filcoin.png" alt="filcoin" border="0"/></a>
          <h3 className='heading heading-btm'>FILECOIN TRACK PRIZE</h3>
      </div>
       
        <ul>
            <li>₹20000 for best use of IPFS and/or Filecoin</li>
            <li>Microgrants up to 5000 USD, open grants up to 50,000 USD</li>
            <li>Know more about the bounty on this<a href='/'>click link!</a> </li>
        </ul>
      </div>

      <div className="tracks">
      <div className="tracks-header">
      <a className='logo' href="https://solana.com/"><img src="https://i.ibb.co/2qsqkZk/solana.png" alt="solana" border="0"/></a>
          <h3 className='heading heading-btm'>SOLANA TRACK PRIZE</h3>
      </div>
        
        <ul>
            <li>Upto $USDC 850 up for grabs, for the best hack built on top of Solana Blockchain at Devfolio-powered community Hackathons.</li>
            <li>young gun - $USDC 100 for the best project beginners just starting out on Solana</li>
            <li>rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code. <a href='/'>Know More...</a> </li>
        </ul>
      </div>

      <div className=" tracks">
      <div className="tracks-header">
      <a className='logo' href="https://replit.com/"><img src="https://i.ibb.co/Y22htt1/replit.png" alt="replit" border="0"/></a>
          <h3 className='heading heading-btm'>REPLIT TRACK PRIZE</h3>
      </div>
    
        <ul>
            <li>$50 to winning project of the hackathon (must be deployed on Replit)</li>
            <li>Replit schwags to 5 eligible submissions deployed on Replit.</li>
            <li>Eligibility for internship / full time role interviews at Replit Know more about the bounty on this<a href='/'>click link!</a> </li>
        </ul>
      </div>


      </div>
    </div>
       
    </div>
  )
}

export default Tracks
