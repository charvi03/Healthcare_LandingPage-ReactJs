import React, { useState } from "react";
import usaFlag from "../images/us.png";
import canadaFlag from "../images/canada.png";
import indiaFlag from "../images/flag.png";

const CustomDropdown = () => {
  const [selected, setSelected] = useState("USA");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700 text-left items-center justify-between"
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <img
            src={
              selected === "USA"
                ? usaFlag
                : selected === "Canada"
                ? canadaFlag
                : selected === "India"
                ? indiaFlag
                : null
            }
            alt={selected}
            className="w-6 h-6 mr-2"
          />
          <span>{selected}</span>
        </div>
        <span>&#9662;</span>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 border border-gray-300 rounded-md bg-gray-100 z-10">
          <button
            className="flex items-center w-full p-2 hover:bg-gray-200"
            onClick={() => handleSelect("USA")}
          >
            <img src={usaFlag} alt="USA Flag" className="w-6 h-6 mr-2" />
            <span>USA</span>
          </button>
          <button
            className="flex items-center w-full p-2 hover:bg-gray-200"
            onClick={() => handleSelect("Canada")}
          >
            <img src={canadaFlag} alt="Canada Flag" className="w-6 h-6 mr-2" />
            <span>Canada</span>
          </button>
          <button
            className="flex items-center w-full p-2 hover:bg-gray-200"
            onClick={() => handleSelect("India")}
          >
            <img src={indiaFlag} alt="India Flag" className="w-6 h-6 mr-2" />
            <span>India</span>
          </button>
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="w-full max-w-md p-4 border-2 border-sky-300 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
      <form>
        {/* Name Field */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700 placeholder-gray-600"
            placeholder="Name"
          />
        </div>

        {/* Select Service Field */}
        <div className="mb-4">
          <select
            id="service"
            className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700"
          >
            <option value="" disabled selected hidden>
              Choose a service...
            </option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
        </div>

        {/* Country and Phone Number Fields */}
        <div className="mb-4 flex items-center space-x-4">
          <div className="w-1/2">
            <CustomDropdown />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              id="phone"
              className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Email Address Field */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700"
            placeholder="Email Address"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <textarea
            id="message"
            rows="2"
            className="block w-full border border-gray-300 rounded-md bg-gray-100 p-2 text-gray-700"
            placeholder="Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-300 text-white py-2 rounded-md hover:bg-sky-400"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
