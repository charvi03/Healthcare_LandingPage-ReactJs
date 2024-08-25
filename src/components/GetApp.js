import React from "react";
import AppImage from "../images/getapp.png";
import BubbleImage1 from "../images/bgnew.png";
import BubbleImage2 from "../images/bgnew1.png";

const GetAppSection = () => {
  return (
    <div className="relative py-16">
      {/* Bubble Images */}
      <img
        src={BubbleImage1}
        alt="Bubble Left"
        className="absolute left-0 bottom-0  w-15 h-15"
      />
      <img
        src={BubbleImage2}
        alt="Bubble Right"
        className="absolute right-0 top-0 w-15 h-15"
      />

      <div className="container mx-auto flex items-center justify-center px-8">
        <div className="flex items-center justify-between w-full max-w-6xl rounded-lg p-8">
          {/* Left Side */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold mb-4">Get App</h2>
            <p className="text-lg text-gray-800 text-wrap">
              Download our app and enjoy the best experience right at your
              fingertips.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-1/2 bg-gradient-to-r from-white to-sky-200 p-4 rounded-2xl flex items-center justify-center border-2 border-sky-100">
            <img src={AppImage} alt="App" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAppSection;
