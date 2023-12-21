import React from "react";
import path268 from "../assests/images/Small_star.png";
import path26 from "../assests/images/Big_star.png";
import vector3 from "../assests/images/Devfolio.png";
import group from "../assests/images/Sallyyy.png";
import idea from "../assests/images/idea.png";
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
          <div className="image__">
            <img src={group} className="main image" />
          </div>
          <img src={path268} className="pl-4 w-12  pt-8" />
        </div>
        <div>
          <img src={path26} className="pl-[650px] star_right" />
          <div className="flex-col text-right pt-52 hero pl-0 space-y-4">
            <h1 className="main text-white text-7xl hero_text whitespace-nowrap ab">
              SprintHacks 2024
            </h1>
            <h1 className="navbar text-white hero_text_2 text-6xl ">
              9th Apr - 10th Apr’24
            </h1>
            <div className="flex flex-col space-x-4 both button_submitIdea">
              <div className="hero_button">
                <button className="rounded dev">
                  <div
                    className="apply-button "
                    data-hackathon-slug="sprinthacks"
                    data-button-theme="dark"
                  />
                </button>
              </div>
              {/* <div className="flex submit_button">
                <button className="bg-[#27333f] rounded px-8 py-1 flex space-x-3 justify-center bulb ">
                  <div>
                    <img src={idea} className="w-10 " />
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://forms.gle/3Ca7wfEwjSL5tqNx6"
                      target="_blank"
                      className="text-xl hero_text_3 font-mono pt-1 text-[#fff] whitespace-nowrap"
                    >
                      Register for Speaker Session
                    </a>
                  </div>
                </button>
              </div> */}
            </div>
          </div>

          <img src={path26} className="pt-44 pl-72 star_right_2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
