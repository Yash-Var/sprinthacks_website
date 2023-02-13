import React from "react";
import Line from "../assests/images/Line 1.png";
import Devfolio from "../assests/images/Devfolio.png";
import Polygon from "../assests/images/polygon.png";
import Solana from "../assests/images/Solana1.png";
import Replit1 from "../assests/images/replit1.png";
import Replit2 from "../assests/images/replit2.png";
import filecoin from "../assests/images/filecoin.png";

const Sponsors = () => {
  return (
    <div className="bg-newcolor" id="sponsor">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:pb-5 max-[415px]:ml-5">
        <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl prizes_">
          SPONSORS
        </h1>
      </div>
      <div className="flex pt-16 pb-10 justify-around max-[415px]:pb-5 max-[415px]:pt-5">
        <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden "
        />
        <h1 className="text-white text-6xl main max-[500px]:text-5xl prizes_  ">
          GOLD
        </h1>
        <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden"
        />
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10 ">
        <a href="https://devfolio.co/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-3 my-5"
          >
            <div className="flex space-x-2">
              <div>
                <img src={Devfolio} />
              </div>
              <h1 className="text-4xl font-bold Sponsors pt-1 text-white">
                Devfolio
              </h1>
            </div>
          </button>
        </a>

        <a href="https://polygon.technology/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-5 px-24 mr-2 my-5"
          >
            <div className="flex space-x-2">
              <div>
                <img src={Polygon} />
              </div>
              <h1 className="text-3xl font-bold  Sponsors navbar pt-1 text-white">
                polygon
              </h1>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-evenly max-[415px]:pt-2">
        <img
          src={Line}
          className="h-2 mt-12 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        />
        <h1 className="text-white text-6xl main max-[500px]:text-5xl prizes_">
          SILVER
        </h1>
        <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        />
      </div>
      <div className="flex  flex-wrap justify-center pt-10 pb-10 ">
        <a href="https://solana.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-5 py-4 mr-3 my-5"
          >
            <div className="flex space-x-1">
              <img src={Solana} />
            </div>
          </button>
        </a>

        <a href="https://replit.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-28 py-6 ml-3 mr-6 my-5"
          >
            <div className="flex space-x-1">
              <div>
                <img src={Replit1} />
              </div>
              <h1 className="text-2xl Sponsors pt-1 text-white">replit</h1>
              <div>
                <img src={Replit2} />
              </div>
            </div>
          </button>
        </a>

        <a href="https://filecoin.io/" target="_blank">
          <button
            type="button"
            className="bg-[#273339]  rounded-lg  px-24 py-5 mr-2 my-5 max-[415px]:pb-1"
          >
            <div className="flex space-x-2">
              <div>
                <img src={filecoin} />
              </div>
              <h1 className="text-2xl font-bold Sponsors pt-2 text-white">
                Filecoin
              </h1>
            </div>
          </button>
        </a>
      </div>

      {/* <div className="flex pt-10 pb-20 max-[500px]:pb-10 max-[500px]:pt-5 justify-evenly">
        <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9"
        />
        <h1 className="text-white text-6xl main max-[500px]:text-5xl">BRONZE</h1>
        <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9"
        />
      </div> */}
    </div>
  );
};

export default Sponsors;
