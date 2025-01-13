import React from "react";
import { useNavigate } from "react-router-dom";

const Error = ({ errorMsg, errorHeading }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="mt-32 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {errorHeading ? errorHeading : "Oops! Something went wrong."}
        </h2>
        <p className="text-gray-600 mb-6">
          {errorMsg
            ? errorMsg
            : "The page you are looking for doesn't exist or an error occurred."}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
