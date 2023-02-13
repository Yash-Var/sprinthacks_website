import React from "react";
import ellipse from "../assests/images/Ellipse.png";
import person from "../assests/images/Henry.png";

const About = () => {
  return (
    <div className="overflow-hidden" id="About">
      <div>
        <h1 className="main text-center text-7xl text-white uppercase p-8 main_heading">
          About us
        </h1>
      </div>
      <div className="flex justify-between items-center main_about">
        <div className="relative">
          <div className="flex">
            <img src={ellipse} className="w-[56rem] h-[64rem] image_about_2" />
            <img
              src={person}
              className="w-[500px] h-[570px] absolute top-48 left-80 image_about"
            />
          </div>
        </div>
        <div className="abouttext font-semibold text-white w-[600px] text-4xl mr-48 content-center content_about">
          SprintHacks is an 18 hour hackathon organized by the Developer Student
          Circuit with endless creativity. The focus is on innovation and
          creativity as participants work together to develop unique solutions
          using the latest technology. With opportunities for networking and
          exciting prizes, this hackathon challenges participants to push their
          limits and create the next innovative product.
        </div>
      </div>
    </div>
  );
};

export default About;
