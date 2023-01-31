import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Sponsors from "./Sponsors";
import Faq from "./Faq";
import Tracks from "./Tracks";

import About from "./About";
import Home from "./Home";
import Prize from "./Prize";
import Themes from "./Themes";
import Hero from "./Hero";
const App = () => {
  return (
    <div className="bg-newcolor">
      {/* <Navbar2 /> */}
      {/* <Navbar /> */}
      <Home />
      {/* <Hero /> */}
      <About />
      <Themes />
      <Prize />
      <Tracks />
      <Faq />
      <Sponsors />
      <div className="meet flex justify-center">
        <a href="https://dsckiet.com/team">
          {" "}
          <h1 className="text-blue-800 main text-2xl">Meet our team</h1>
        </a>
        <i class="fa-solid fa-arrow-pointer text-2xl pt-4 pl-1"></i>
      </div>
      <Contact />
    </div>
  );
};

export default App;
