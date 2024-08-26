import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBeer,
  FaCoffee,
  FaApple,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import LineImage from "../images/line.png";

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <FaBeer className="text-4xl blue-500" />,
      heading: "Heading 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat ut ligula gravida pharetra. Vivamus euismod dolor sit amet magna suscipit, id dignissim libero aliquet. Integer sed turpis quis erat interdum bibendum.",
    },
    {
      icon: <FaCoffee className="text-4xl blue-500" />,
      heading: "Heading 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat ut ligula gravida pharetra. Vivamus euismod dolor sit amet magna suscipit, id dignissim libero aliquet. Integer sed turpis quis erat interdum bibendum.",
    },
    {
      icon: <FaApple className="text-4xl blue-500" />,
      heading: "Heading 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat ut ligula gravida pharetra. Vivamus euismod dolor sit amet magna suscipit, id dignissim libero aliquet. Integer sed turpis quis erat interdum bibendum.",
    },
    {
      icon: <FaHeart className="text-4xl blue-500" />,
      heading: "Heading 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat ut ligula gravida pharetra. Vivamus euismod dolor sit amet magna suscipit, id dignissim libero aliquet. Integer sed turpis quis erat interdum bibendum.",
    },
    {
      icon: <FaStar className="text-4xl blue-500" />,
      heading: "Heading 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat ut ligula gravida pharetra. Vivamus euismod dolor sit amet magna suscipit, id dignissim libero aliquet. Integer sed turpis quis erat interdum bibendum.",
    },
  ];

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(slides.length - 3, 0) : prev - 1
    );
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 3 >= slides.length ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">How Our Platform works</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quam
          totam quo fugiat deserunt vero cumque officia in provident dolorem.
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {slides.map((slide, index) => (
              <React.Fragment key={index}>
                <div className="flex-shrink-0 w-1/3 px-1">
                  {" "}
                  <div className="flex flex-col items-center bg-white p-2 rounded-none">
                    <div className="w-16 h-16 bg-sky-400 text-white flex items-center justify-center rounded-xl mb-4">
                      {slide.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {slide.heading}
                    </h3>
                    <p className="text-gray-700 text-center">{slide.text}</p>
                  </div>
                </div>
                {index < slides.length - 1 && (
                  <div className="flex-shrink-0 w-1/6 flex items-center justify-center px-1">
                    <img
                      src={LineImage}
                      alt="Divider"
                      className="w-32 h-10 object-contain"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-sky-400 text-white rounded mx-4"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-sky-400 text-white rounded mx-4"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
