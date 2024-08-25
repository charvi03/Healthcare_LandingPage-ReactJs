import React from "react";
import {
  FaCheckCircle,
  FaHeartbeat,
  FaStethoscope,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import Side from "../images/side1.png";
import Phone from "../images/phone img.png";
import Signal from "../images/signal lines.png";

const BenefitsSection = () => {
  return (
    <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row items-center">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        {/* Bottom Image */}
        <img
          src={Side}
          alt="Bottom Image"
          className="w-4/5 md:w-3/4 h-auto object-contain"
        />
        {/* Top Image */}
        <img
          src={Phone}
          alt="Top Image"
          className="absolute top-[8%] left-[25%] w-2/3 md:w-3/5 h-auto object-contain "
        />
      </div>

      {/* Image Divider */}
      <div className="hidden md:block mx-10">
        <img
          src={Signal}
          alt="Divider Image"
          className="h-96 w-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-black mb-4">
          The <span className="text-sky-400">Benefits</span> of Utilizing Webapp
          for Clinics
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-400 rounded-full text-white mr-4">
              <FaCheckCircle className="text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Heading</h3>
              <p className="text-gray-700">
                Improved patient management and scheduling.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-400 rounded-full text-white mr-4">
              <FaHeartbeat className="text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Heading</h3>
              <p className="text-gray-700">
                Enhanced diagnostic accuracy with integrated tools.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-400 rounded-full text-white mr-4">
              <FaStethoscope className="text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Heading</h3>
              <p className="text-gray-700">
                Streamlined communication between healthcare providers.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-400 rounded-full text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Heading</h3>
              <p className="text-gray-700">
                Secure and compliant data handling.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-400 rounded-full text-white mr-4">
              <FaUserMd className="text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">Heading</h3>
              <p className="text-gray-700">
                User-friendly interface for doctors and staff.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsSection;
