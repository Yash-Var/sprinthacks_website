import React from "react";

function Prize() {
  return (
    <div className="overflow-hidden" id="prizes">
      <div>
        <h1 className="main main_heading text-center text-7xl text-white uppercase p-8">
          PRIZES
        </h1>
      </div>

      <div className="row flex justify-center m-2 mb-16 prize">
        <div className="prize2 text-white uppercase abouttext text-center 
">
          <img
            border="0"
            src="https://i.ibb.co/SVWswxW/prize2.png"
            alt="prize2"
            className="my-16 h-48 m-auto prize_mobile_screen
            "
          />
          <h1 className="navbar text-6xl">1ST RUNNER UP</h1>
          <h1 className="navbar text-5xl mt-4">₹20,000</h1>
        </div>
        <div className="prize1 text-white uppercase abouttext text-center ">
          <img
            src="https://i.ibb.co/N7xD1pX/prize1.png"
            alt="prize1"
            border="0"
            className=" my-4 m-auto h-60 image_one"
          />
          <h1 className="navbar text-6xl tracking-widest winner"> WINNER</h1>
          <h1 className="navbar text-5xl mt-4">₹30,000</h1>
        </div>
        <div className="prize3  text-white uppercase abouttext text-center ">
          <img
            src="https://i.ibb.co/fFnpKtJ/prize3.png"
            alt="prize3"
            border="0"
            className="mt-22 my-16 h-48 m-auto prize_mobile_screen
            "
          />
          <h1 className="navbar text-6xl">2ND RUNNER UP</h1>
          <h1 className="navbar text-5xl mt-4">₹10,000</h1>
        </div>
      </div>
    </div>
  );
}

export default Prize;
