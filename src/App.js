import React from "react";
import Contact from "./Contact";
import Sponsors from "./Sponsors";
import Faq from "./Faq";
import Tracks from "./Tracks";
import About from "./About";
import Home from "./Home";
import Prize from "./Prize";
import Themes from "./Themes";
import Hero from "./Hero";
import Navbar from "./Navbar2";
const App = () => {
  return (
    <div>
      <div className="bg-newcolor overflow-hidden">
        <Home />

        <About />
        <Themes />
        <Prize />
        <Tracks />
        <Faq />
        <Sponsors />
        <div>
          <center>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13991.494256086988!2d77.47975453955078!3d28.753191700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1675160744598!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[80vw] h-[30vw] p-7 map "
            ></iframe>
          </center>
        </div>
        <div className="meet flex justify-center bg-newcolor">
          <a href="https://dsckiet.com/team" target="_blank">
            <h1 className="text-white hover:underline meet_team hover:text-blue-500 main text-2xl">
              Meet our team
            </h1>
          </a>
          {/* <i class="fa-solid fa-arrow-pointer text-2xl text-white pt-4 pl-1 icon"></i> */}
        </div>
        <Contact />
      </div>
    </div>
  );
};
export default App;
