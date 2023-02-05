import React from "react";
import Hero from "./Hero";

import Navbar from "./Navbar2";

import group from "../assests/images/Race-track.png";

const Home = () => {
  return (
    <div className="flex  overflow-hidden">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <Hero />
      </div>

      <div className="fixed right-0 race">
        <img src={group} alt="logo" className=" image_hero" />
      </div>
    </div>
  );
};

export default Home;
