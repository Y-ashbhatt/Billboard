import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const finalImage = "./preview.jpg";
  const pictureSVG = "./picture.svg";
  const ChatGptCredits = "./ChatGptCredits.svg";
  const tasksSVG = "./tasks.svg";
  const settingsSVG = "./settings.svg";
  const creditsSVG = "./credits.svg";
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-50">
        <nav className="mt-16">
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
            <li className="px-6">
              <a
                href="#"
                className="w-fit flex items-center p-2 hover:bg-gray-200 rounded-lg"
                title="Profile"
              >
                <img className="w-9 h-9" src='/account.svg' alt="Profile" />
                {/* <span className="ml-3 text-gray-700 font-semibold">Settings</span> */}
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className="p-4 flex items-center justify-center">
          <div className="w-16 h-16 text-white flex items-center justify-center font-bold">
            <img
              className="w-16 h-16 rounded-full"
              src='/account.svg'
              alt="Profile"
            />
          </div>
        </div> */}
        <div className="mt-96 p-4">
          <div className="">
            <a
              href="/"
              className="w-fit flex items-center p-2 hover:bg-gray-200 rounded-lg"
              title="Logout"
            >
              <img className="w-9 h-9" src='/logout.svg' alt="Logout" />
              {/* <span className="ml-3 text-gray-700 font-semibold">Settings</span> */}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="mr-10 ml-10 flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="flex items-center rounded-full w-full max-w-2xl text-3xl">
            <h1 className="text-blue-400 font-light">Create Your Own Version of Billboard with AI</h1>
          </div>
        </header>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center rounded-full w-full max-w-2xl text-3xl">
            <h1>Dashboard</h1>
          </div>

          {/* Create Task Button */}
          <button
            onClick={() => navigate("/upload")}
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-800"
          >
            Create Task
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-2 gap-16">
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
          {/* <div className="bg-white rounded-lg shadow-lg p-4">
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
          </div> */}

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
              {/* <li className="flex items-center bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                <span className="font-semibold text-gray-700 mr-7 mb-3">
                  <img src={HTMLmockups} alt="HTML Mockups" />
                </span>
                <span className="">
                  <div className="text-4xl">75</div>
                  <div className="text-lg">Processed HTML Mockups</div>
                </span>
              </li> */}
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
