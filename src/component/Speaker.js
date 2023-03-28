import React from "react";


const Sponsors = () => {
  return (
    <div className="bg-newcolor" id="sponsor">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
          SPEAKER & JUDGES
        </h1>
      </div>
      <div className="Speaker_big_box bg-gray-800 w-[100%]">
        <div className="speaker_profile">
            <div className="speaker_image "></div>
            <div className="speaker_description"></div>
            <div className="speaker_socials"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
