import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side (Desktop view) */}
        <div className="hidden md:flex w-full justify-center space-x-6 md:space-x-20">
          <a href="#" className="text-black hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            About Us
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Contact Us
          </a>
        </div>

        {/* Right side (Desktop view) */}
        <div className="hidden md:flex space-x-10">
          <a
            href="#"
            className="bg-white border border-sky-500 text-black hover:bg-sky-500 hover:text-white px-6 py-2 rounded-full whitespace-nowrap"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-white border border-sky-500 text-black hover:bg-sky-500 hover:text-white px-6 py-2 rounded-full whitespace-nowrap"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-3 space-y-4">
          <a href="#" className="text-black hover:text-gray-700 block">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-700 block">
            About Us
          </a>
          <a href="#" className="text-black hover:text-gray-700 block">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-gray-700 block">
            Contact Us
          </a>
          <a
            href="#"
            className="bg-white border border-sky-500 text-black hover:bg-sky-500 hover:text-white py-3 px-6 rounded block text-center"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-white border border-sky-500 text-black hover:bg-sky-500 hover:text-white py-3 px-6 rounded block text-center"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
