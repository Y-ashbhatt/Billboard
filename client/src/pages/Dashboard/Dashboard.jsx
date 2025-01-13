import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const finalImage = "./preview.jpg";
  const pictureSVG = "./picture.svg";
  const HTMLmockups = "./HTMLmockups.svg";
  const ChatGptCredits = "./ChatGptCredits.svg";
  const tasksSVG = "./tasks.svg";
  const settingsSVG = "./settings.svg";
  const creditsSVG = "./credits.svg";
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-50">
        <div className="p-4 mt-6 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full text-white flex items-center justify-center font-bold">
            <img
              className="w-20 h-20 rounded-full"
              src={finalImage}
              alt="Profile"
            />
          </div>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li className="px-6">
              <a
                href="#"
                className="w-fit flex items-center p-2 hover:bg-gray-200 rounded-lg"
                title="Task"
              >
                <img className="w-9 h-9" src={tasksSVG} alt="Tasks" />
                {/* <span className="ml-3 text-gray-700 font-semibold">Tasks</span> */}
              </a>
            </li>
            <li className="px-6">
              <a
                href="#"
                className="w-fit flex items-center p-2 hover:bg-gray-200 rounded-lg"
                title="Settings"
              >
                <img className="w-9 h-9" src={settingsSVG} alt="Settings" />
                {/* <span className="ml-3 text-gray-700 font-semibold">Settings</span> */}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="flex items-center bg-white p-2 rounded-full shadow-sm w-full max-w-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="ml-3 flex-1 outline-none bg-transparent"
            />
          </div>

          {/* Create Task Button */}
          <button
            onClick={() => navigate("/upload")}
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-800"
          >
            Create Task
          </button>
        </header>

        <div className="flex mt-2 mb-6">
          <h1 className="text-3xl">Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Processed Images */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl mb-4">Processed Images</h2>
            <ul className="space-y-4 bg-gray-100 p-5 rounded-2xl">
              {[
                "Sunset Over Lake",
                "City Skyline at Night",
                "Autumn Forest",
                "Mountain Range",
                "Market Street",
                "Beach at Sunset",
              ].map((title, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300">
                    <img src={finalImage} className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">
                      A brief description of the image.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/upload")}
              className="w-full mt-4 bg-white border-solid border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-600 hover:text-white"
            >
              Create Task
            </button>
          </div>

          {/* Processed HTML Mockups */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl mb-4">Processed HTML Mockups</h2>
            <ul className="space-y-4 p-5">
              {[
                "Landing Page",
                "Product Page",
                "Portfolio Website",
                "Blog Post",
                "Contact Page",
                "Services Page",
              ].map((title, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300">
                    <img src={finalImage} className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">
                      A brief description of the mockup.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/upload")}
              className="w-full mt-4 bg-white border-solid border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-600 hover:text-white"
            >
              Create Task
            </button>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl mb-4">Statistics</h2>
            <ul className="space-y-4 p-0">
              <li className="flex items-center bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                <span className="font-semibold text-gray-700 mr-7 mb-3">
                  <img src={creditsSVG} alt="credits" />
                </span>
                <span className="">
                  <div className="text-4xl">12</div>
                  <div className="text-lg">Remaining Credits</div>
                </span>
              </li>
              <li className="flex items-center bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                <span className="font-semibold text-gray-700 mr-7 mb-3">
                  <img src={pictureSVG} alt="pucture" />
                </span>
                <span className="">
                  <div className="text-4xl">250</div>
                  <div className="text-lg">Processed Images</div>
                </span>
              </li>
              <li className="flex items-center bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                <span className="font-semibold text-gray-700 mr-7 mb-3">
                  <img src={HTMLmockups} alt="HTML Mockups" />
                </span>
                <span className="">
                  <div className="text-4xl">75</div>
                  <div className="text-lg">Processed HTML Mockups</div>
                </span>
              </li>
              <li className="flex items-center bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                <span className="font-semibold text-gray-700 mr-7 mb-3">
                  <img src={ChatGptCredits} alt="credits" />
                </span>
                <span className="">
                  <div className="text-4xl">45</div>
                  <div className="text-lg">Chat GPT Credits</div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
