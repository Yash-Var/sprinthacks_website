import React from "react";
import Line from "../assests/images/Line 1.png";
import Devfolio from "../assests/images/Devfolio.png";
import Polygon from "../assests/images/polygon1.png";
import Solana from "../assests/images/Solana1.png";
import Replit1 from "../assests/images/replit1.png";
import Replit2 from "../assests/images/replit2.png";
import filecoin from "../assests/images/filecoin.png";
import Echo from "../assests/images/echo3D.png";
import taskade from "../assests/images/taskade.png";
import Foss from "../assests/images/Foss.jpg";
import GMC from "../assests/images/GMC.png";
import Threeway from "../assests/images/Threeway.png";
import Greedygame from "../assests/images/Greedygame.svg";

const Sponsors = () => {
  return (
    <div className="bg-newcolor" id="sponsor">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
          SPONSORS
        </h1>
      </div>
      <div className="flex pt-10 pb-10 justify-around max-[415px]:py-3">
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden "
        /> */}
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5 ">
          GOLD
        </h1>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5 ">
        <a href="https://devfolio.co/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-3 my-5 max-[520px]:px-16 "
          >
            <div className="flex space-x-2">
              <div className="max-[390px]:w-10">
                <img src={Devfolio} />
              </div>
              <h1 className="text-4xl font-bold Sponsors pt-1 text-white max-[415px]:text-3xl  ">
                Devfolio
              </h1>
            </div>
          </button>
        </a>

        <a href="https://polygon.technology/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 my-5  max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Polygon} className="w-56" />
              </div>
            </div>
          </button>
        </a>

        <a href="https://greedygame.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 my-5 max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Greedygame} className="w-56 h-14" />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-evenly max-[415px]:py-3">
        {/* <img
          src={Line}
          className="h-2 mt-12 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5">
          SILVER
        </h1>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className="flex  flex-wrap justify-center pt-10 pb-10 max-[415px]:pt-5 max-[415px]:pb-10">
        <a href="https://solana.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-5 py-4 mr-3 my-5 max-[391px]:px-1"
          >
            <div className="flex space-x-1">
              <img src={Solana} />
            </div>
          </button>
        </a>

        <a href="https://replit.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-28 py-6 ml-3 mr-6 my-5 max-[390px]:px-24"
          >
            <div className="flex space-x-1">
              <div>
                <img src={Replit1} />
              </div>
              <h1 className="text-2xl Sponsors pt-1 text-white ">replit</h1>
              <div>
                <img src={Replit2} />
              </div>
            </div>
          </button>
        </a>

        <a href="https://filecoin.io/" target="_blank">
          <button
            type="button"
            className="bg-[#273339]  rounded-lg  px-24 py-5 mr-2 my-3 max-[415px]:pb-5 max-[390px]:px-20"
          >
            <div className="flex space-x-2">
              <div className="max-[390px]:w-10">
                <img src={filecoin} />
              </div>
              <h1 className="text-2xl font-bold Sponsors pt-2 text-white">
                Filecoin
              </h1>
            </div>
          </button>
        </a>
      </div>

      <div className="flex pt-11 pb-10 justify-evenly max-[415px]:py-3">
        {/* <img
          src={Line}
          className="h-2 mt-12 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
        <h1 className="text-white text-6xl main max-[500px]:text-5xl max-[466px]:mr-5">
          BRONZE{" "}
        </h1>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-10 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5">
        <a href="https://www.echo3d.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-16 py-6 max-[390px]:px-12 mr-3 my-5 "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Echo} className="w-52 h-10 max-[627px]:h-10 " />
              </div>
            </div>
          </button>
        </a>

        <a href="https://www.taskade.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-5 px-20 mr-2 my-5 max-[390px]:px-16"
          >
            <div className="flex space-x-2">
              <div>
                <img src={taskade} className="w-44 h-12 " />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-around max-[415px]:py-7">
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden "
        /> */}
        <center>
          <h1 className="text-white text-6xl main max-[600px]:text-5xl max-[466px]:mr-5 ">
            COMMUNITY PARTNER
          </h1>
        </center>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5 ">
      

        <a href="https://www.threeway.studio/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  py-4 px-20 mr-2 my-5  max-[520px]:px-16 max-[415px]:px-12   "
          >
            <div className="flex space-x-2">
              <div>
                <img src={Threeway} className="w-56" />
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="flex pt-10 pb-10 justify-around max-[415px]:py-7">
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden "
        /> */}
        <center>
          <h1 className="text-white text-6xl main max-[600px]:text-5xl max-[466px]:mr-5 ">
            CERTIFICATE PARTNER
          </h1>
        </center>
        {/* <img
          src={Line}
          className="h-2 mt-11 mx-10 overflow-hidden max-md:mx-3 max-[500px]:mt-9 max-[454px]:mt-14 max-[415px]:hidden"
        /> */}
      </div>
      <div className=" flex  flex-wrap justify-center pt-10 pb-10  max-[415px]:py-5 ">
        <a href="https://givemycertificate.com/" target="_blank">
          <button
            type="button"
            className="bg-[#273339] rounded-lg  px-20 py-5 mr-3 my-5 max-[520px]:px-16 max-[389px]:pb-1 max-[389px]:px-10 "
          >
            <div className="flex space-x-2">
              <div className="max-[389px]:h-32">
                <img src={GMC} className="h-36 max-[389px]:h-28" />
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
