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
      setLoading(true)
      setTimeout(() => {
        setCurrentStep(2);
        setLoading(false)
      }, 6500);
    }
  };

  const handleSubmit = () => {
    if (!banner) {
      showNotification("Please upload a banner image to proceed.");
      // return;
    } else {
      // fetchData();
      setLoading(true)
      setTimeout(() => {
        setCurrentStep(2);
        setLoading(false)
        navigate('/success')
      }, 6500);
    }
  };

  return (
    <>
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

        {/* Dashboard Content */}
        {error && (
            <Error errorMsg="Sorry, Some Internal server error has occured, Please try later" />
          )}
          {!error && (
            <div className=" mt-10 flex flex-col items-center justify-center">
              {currentStep === 1 && (
                <div className="bg-white/50 border-2 border-gray-200 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
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
                    label={loading ? "Processing..." : "Process with AI"}
                    onClick={handleNextClick}
                    className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow ${loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    disabled={loading}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="max-w-[1450px] flex flex-col items-center gap-16">
                  <figure className="w-full flex justify-between gap-16">
                    <div className="text-center">
                      <img src="/billboardimg.jpeg" alt="Source Image" className="h-[300px] rounded-lg" />
                      <figcaption className="mt-2 text-lg font-medium">Source Image</figcaption>
                    </div>
                    <div className="text-center">
                      <img src="/billboardsegment.jpeg" alt="Segmented Image" className="h-[300px] rounded-lg" />
                      <figcaption className="mt-2 text-lg font-medium">Segemented Image</figcaption>
                    </div>
                  </figure>

                  <div className="bg-white/50 border-2 border-gray-200 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
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
                      label={loading ? "Just a moment, Processing..." : "Process with AI"}
                      onClick={handleSubmit}
                      className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow ${loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-700"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      disabled={loading}
                    />
                  </div>
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
