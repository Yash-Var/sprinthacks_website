import React from "react";
import path268 from "../assests/images/Small_star.png";
import path26 from "../assests/images/Big_star.png";
import vector3 from "../assests/images/DEVFOLIO.png";
import group from "../assests/images/Sallyyy.png";
const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="">
      <div className="px-40 py-5 flex hero_main">
        <div className="">
          <img src={path268} className="pl-64 pt-8 " />
          <img src={group} className="main" />
          <img src={path268} className="pl-4 w-12  pt-8" />
        </div>
        <div>
          <img src={path26} className="pl-[650px] star_right" />
          <div className="flex-col text-right pt-52 hero pl-0 space-y-4">
            <h1 className="main text-white text-7xl hero_text whitespace-nowrap ab">
              SprintHacks 2023
            </h1>
            <h1 className="navbar text-white hero_text_2 text-6xl">
              Revealing Soon....
            </h1>
            <button className="rounded dev">
              <div
                className="apply-button"
                data-hackathon-slug="sprinthacks.devfolio.co"
                data-button-theme="dark"
                
              />

              {/* <div className="flex space-x-4">
                <div>
                  <img src={vector3} className="dev_logo" />
                </div>
                <h1 className="text-xl hero_text_3 font-mono pt-1 text-gray-800 ">
                  Apply with Devfolio
                </h1>
              </div> */}
            </button>
          </div>
          <img src={path26} className="pt-44 pl-72 star_right_2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
