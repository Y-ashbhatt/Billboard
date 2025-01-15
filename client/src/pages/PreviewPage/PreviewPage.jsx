import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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
      <Sidebar />

      {/* Main Content */}
      <main className="mr-10 ml-28 flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* Search Bar */}
         
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
