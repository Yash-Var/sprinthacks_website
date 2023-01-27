import React from "react";

function Prize() {
  return (
    <div>
      <div>
        <h1 className="main text-center text-7xl text-white uppercase p-8">
          PRIZES
        </h1>
      </div>

      <div className="row flex justify-center m-2 mb-16">
        <div className="prize2 text-white uppercase abouttext text-center">
          <img
            border="0"
            src="https://i.ibb.co/SVWswxW/prize2.png"
            alt="prize2"
            className="m-8 mt-20"
          />
          <h1 className="navbar text-6xl">1ST RUNNER UP</h1>
          <h1 className="navbar text-5xl mt-4">₹20,000</h1>
        </div>
        <div className="prize1 text-white uppercase abouttext text-center ">
          <img
            src="https://i.ibb.co/N7xD1pX/prize1.png"
            alt="prize1"
            border="0"
            className="m-8"
          />
          <h1 className="navbar text-6xl"> WINNER</h1>
          <h1 className="navbar text-5xl mt-4">₹30,000</h1>
        </div>
        <div className="prize3 text-white uppercase abouttext text-center ">
          <img
            src="https://i.ibb.co/fFnpKtJ/prize3.png"
            alt="prize3"
            border="0"
            className="m-8 mt-24"
          />
          <h1 className="navbar text-6xl">2ND RUNNER UP</h1>
          <h1 className="navbar text-5xl mt-4">₹10,000</h1>
        </div>
      </div>
    </div>
  );
}

export default Prize;
