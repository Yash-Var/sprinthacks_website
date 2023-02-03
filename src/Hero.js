import React from "react";
import path268 from "./images/Small_star.png";
import path26 from "./images/Big_star.png";
import vector3 from "./images/DEVFOLIO.png";
import group from "./images/Sallyyy.png";
const Hero = () => {
  return (
    <div className="">
      <div className="px-40 py-5 hero_main_">
        <div>
          <img src={path268} className="pl-64 pt-8 " />
          <img src={group} className="main" />
          <img src={path268} className="pl-4 w-12  pt-8" />
        </div>
        <div>
          <img src={path26} className="pl-[650px] star_right" />
          <div className="flex-col text-right mt-4 hero_ pl-0 space-y-4">
            <div className="main text-white hero_text_">SprintHacks 2023</div>
            <h1 className="navbar text-white hero_text_2_ text-6xl">
              Revealing Soon....
            </h1>
            <button className="devfolio_button bg-white rounded px-4 py-4">
              <div className="flex space-x-4">
                <div>
                  <img src={vector3} />
                </div>
                <h1 className="text-xl hero_text_3_ font-mono pt-1 text-gray-800 ">
                  Apply with Devfolio
                </h1>
              </div>
            </button>
          </div>
          <img src={path26} className="pt-44 pl-72 star_right_2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
