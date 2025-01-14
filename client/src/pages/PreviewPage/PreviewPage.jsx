import React from "react";
import { useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const finalImage = "./processedimg.jpeg";

  const pictureSVG = "./picture.svg";
  const HTMLmockups = "./HTMLmockups.svg";
  const ChatGptCredits = "./ChatGptCredits.svg";
  const tasksSVG = "./tasks.svg";
  const settingsSVG = "./settings.svg";
  const creditsSVG = "./credits.svg";

  const navigate = useNavigate('/upload')

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = finalImage;
    link.download = "updated-billboard.png";
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-50 fixed">
        <nav className="mt-16">
          <ul className="space-y-2">
            <li className="px-6">
              <a
                href="#"
                className="w-fit flex items-center p-2 hover:bg-gray-200 rounded-lg"
                title="Dashboard"
              >
                <img className="w-9 h-9" src='/dashboard.svg' alt="Dashboard" />
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
        <div className="mt-96 px-6 py-4">
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
      <main className="mr-10 ml-28 flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="flex items-center rounded-full w-full max-w-2xl text-3xl">
            <h1 className="text-blue-400 font-light">Create Your Own Version of Billboard with AI</h1>
          </div>
        </header>

        <div className="block mx-auto w-fit ">
        <div className="flex mt-2 mb-6">
          <h1 className="text-3xl text-center w-full font-bold">Download Billboard</h1>
        </div>
        {/* Image Preview */}
        {finalImage ? (
          <img
            src={finalImage}
            alt="Processed Image"
            className="w-full max-w-lg rounded-lg shadow-lg mb-6"
          />
        ) : (
          <p className="text-lg text-gray-700 mb-6">
            No image available for preview.
          </p>
        )}
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow transition-all block mx-auto"
        >
          Download Image
        </button>
        </div>
      </main>
    </div>
  );
};

export default PreviewPage;
