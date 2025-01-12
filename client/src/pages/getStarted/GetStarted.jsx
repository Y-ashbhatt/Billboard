import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section with Background Image */}
      <div
        className="lg:w-1/2 w-full min-h-[50vh] lg:min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Get-Started.jpeg')" }}
      ></div>

      {/* Right Section with Content */}
      <div className="lg:w-1/2 w-full flex justify-center items-center p-6">
        <div className="max-w-[30rem]">
          {/* Heading */}
          <h1 className="text-6xl leading-snug mb-8 text-gray-900">
            Welcome to the
            <br /> BillBoard AI &
            <br /> Let's Get Started
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Your perfect billboard is just a click away. Capture, measure, and
            create in minutes with BillBoard AI.
          </p>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="w-full bg-white border mb-8 border-gray-600 text-[#420d8b] hover:bg-[#420d8b] hover:text-white py-2 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-md transition duration-300"
          >
            Log In
          </button>
          {/* Call to Action */}
          <p className="text-base text-gray-500 ">
            Ready to redefine billboard customization? Log in now to start your
            journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
