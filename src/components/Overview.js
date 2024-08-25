import React from "react";
import OverviewImage from "../images/overview.png";

const OverviewSection = () => {
  return (
    <div className="container mx-auto px-8 py-8 flex flex-col-reverse md:flex-row items-center justify-between bg-blue-50">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={OverviewImage}
          alt="Overview"
          className="w-3/4 md:w-2/3 h-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Overview</h2>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vehicula felis eget nisl sollicitudin, et elementum magna sodales. In
          hac habitasse platea dictumst. Vivamus lacinia vehicula felis, sit
          amet feugiat arcu congue a.
        </p>
        <button className="mt-6 bg-sky-500 text-white py-2 px-6 rounded hover:bg-sky-600">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default OverviewSection;
