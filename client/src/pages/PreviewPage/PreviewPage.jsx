import React from "react";

const PreviewPage = () => {
  const finalImage = "./preview.jpg";

  const pictureSVG = "./picture.svg";
  const HTMLmockups = "./HTMLmockups.svg";
  const ChatGptCredits = "./ChatGptCredits.svg";
  const tasksSVG = "./tasks.svg";
  const settingsSVG = "./settings.svg";
  const creditsSVG = "./credits.svg";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = finalImage;
    link.download = "updated-billboard.png";
    link.click();
  };

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
          <h1 className="text-3xl">Download Billboard</h1>
        </div>
        {/* Image Preview */}
        {finalImage ? (
          <img
            src={finalImage}
            alt="Preview"
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
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-all"
        >
          Download Image
        </button>
      </main>
    </div>
  );
};

export default PreviewPage;
