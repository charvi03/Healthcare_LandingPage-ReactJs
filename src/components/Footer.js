import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* First Column */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0 flex-grow md:mr-16">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              totam optio dolorem sed iusto voluptas vitae veritatis quo minus
              blanditiis.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-sky-300 text-white p-2 rounded-full hover:bg-sky-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-sky-300 text-white p-2 rounded-full hover:bg-sky-400"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-sky-300 text-white p-2 rounded-full hover:bg-sky-400"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-sky-300 text-white p-2 rounded-full hover:bg-sky-400"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Second Column - Support */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Services */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Legal */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Lorem ipsum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-8 border border-sky-400"></div>

        {/* Footer Note */}
        <div className="flex justify-center md:justify-between items-center">
          <p className="text-sm md:mr-auto"></p>
          <p className="text-sm md:ml-auto">
            2024 Webapp © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
