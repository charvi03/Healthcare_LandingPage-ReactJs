import React, { useState } from "react";
import faqImage from "../images/faq.png";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio ab",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio ab",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio ab",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio ab",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio ab",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 relative">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2">Got any questions?</h2>
        <p className="text-sky-400 text-lg">We have your answers</p>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Left Side: FAQs */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleOpen(index)}
                className="flex justify-between items-center w-full p-4 text-left text-gray-700 hover:bg-gray-100"
                style={{ backgroundColor: "transparent" }} // Remove background color
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  } text-sky-400`} // Blue arrow color
                >
                  &#9662;
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end md:absolute md:bottom-0 md:right-0 md:mb-8">
          <img src={faqImage} alt="FAQ" className="w-3/4 md:w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
