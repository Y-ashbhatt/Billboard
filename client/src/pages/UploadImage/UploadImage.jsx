import React, { useState, useCallback } from "react";
import FileUploader from "../../components/FileUploader";
import Button from "../../components/Button";
import { useNotification } from "../../context/NotificationContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../../components/Error";

const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [billboard, setBillboard] = useState(null);
  const [banner, setBanner] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); // Step 1: Billboard, Step 2: Banner
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const baseURL = "http://localhost:5000/api";

  const finalImage = "./preview.jpg";
  const pictureSVG = "./picture.svg";
  const HTMLmockups = "./HTMLmockups.svg";
  const ChatGptCredits = "./ChatGptCredits.svg";
  const tasksSVG = "./tasks.svg";
  const settingsSVG = "./settings.svg";
  const creditsSVG = "./credits.svg";

  // Function to fetch data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      if (billboard) formData.append("billboard", billboard);
      if (banner) formData.append("banner", banner);

      // Make the API request
      const response = await axios.post(
        `${baseURL}/generate-billboard`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setError(false);
        // Store the image in sessionStorage
        if (response.data.image) {
          sessionStorage.setItem("generatedImage", response.data.image);
        }

        navigate("/success");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [billboard, banner]);

  const handleNextClick = () => {
    if (!billboard) {
      showNotification("Please upload a billboard image before proceeding.");
    } else {
      setCurrentStep(2);
    }
  };

  const handleSubmit = () => {
    if (!banner) {
      showNotification("Please upload a banner image to proceed.");
      return;
    }
    fetchData();
  };

  return (
    <>
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
            <h1 className="text-3xl">Upload Image</h1>
          </div>
          {error && (
            <Error errorMsg="Sorry, Some Internal server error has occured, Please try later" />
          )}
          {!error && (
            <div className=" mt-32 flex flex-col items-center justify-center">
              {currentStep === 1 && (
                <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
                  <h1 className="text-3xl text-gray-800 font-bold mb-4">
                    Upload Billboard Image
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Upload the image that you want to use for the billboard.
                    Once uploaded, proceed to the next step to upload your
                    banner.
                  </p>

                  <FileUploader
                    label="Choose Billboard Image"
                    onFileChange={(file) => setBillboard(file)}
                  />

                  <Button
                    label="Next"
                    onClick={handleNextClick}
                    className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
                  <h1 className="text-3xl text-gray-800 font-bold mb-4">
                    Upload Banner Image
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Select the banner image you want to place on the billboard.
                    Once uploaded, you can proceed to process it with AI.
                  </p>

                  <FileUploader
                    label="Choose Banner Image"
                    onFileChange={(file) => setBanner(file)}
                  />

                  <Button
                    label={loading ? "Processing..." : "Process with AI"}
                    onClick={handleSubmit}
                    className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-700"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    disabled={loading}
                  />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default UploadImage;
