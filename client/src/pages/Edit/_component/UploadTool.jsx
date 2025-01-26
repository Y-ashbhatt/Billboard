// UploadTool.js (Component)
import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadTool = ({ closeSidebar }) => {
  const [activeTab, setActiveTab] = useState("images");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleUploadClick = () => {
    console.log("Upload media clicked");
  };

  const handleDeleteClick = () => {
    console.log("Delete assets clicked");
  };

  return (
    <div className="">
      <div className="tool-content p-4 bg-white rounded-lg shadow-lg">
        <p className="text-lg font-bold inline-block uppercase mb-4">Uploads</p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 150px" }}
          />
        </button>
        <div className="flex justify-center gap-2">
          <label
            htmlFor="upload-input"
            className="btn primary bg-[#a134ff] text-white px-4 w-full py-2 rounded-md cursor-pointer"
          >
            <FileUploadIcon />
            Upload media
          </label>
          <input
            id="upload-input"
            type="file"
            className="hidden"
            onChange={handleUploadClick}
          />
          <button
            id="delete-assets-button"
            type="button"
            className="btn danger bg-red-500 text-white px-4 py-2 w-fit rounded-md"
            onClick={handleDeleteClick}
          >
            <DeleteForeverIcon />
          </button>
        </div>
        <div className="flex w-full justify-between font-semibold mt-3 text-sm">
          <div
            className={`px-4 py-2 cursor-pointer  border-b-4 w-1/2 text-center border-[#a134ff]`}
            onClick={() => handleTabClick("pixabay-images")}
          >
            Images
          </div>
          {/* <div
                        className={`px-4 py-2 cursor-pointer border-b-4 w-1/2 text-center  border-gray-300 ${activeTab === 'pexels-images' ? ' border-[#a134ff] ' : 'border-gray-300'}`}
                        onClick={() => handleTabClick('pexels-images')}
                    >
                        Videos
                    </div> */}
        </div>

        <div
          id="uploaded-images"
          className={`${activeTab === "images" ? "" : "hidden"} mt-4`}
        >
          <div id="uploaded-images-grid" className="css-grid">
            {/* Render uploaded images here */}
            {uploadedImages.length > 0 ? (
              uploadedImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.name}
                  className="w-full h-auto"
                />
              ))
            ) : (
              <p>No images uploaded.</p>
            )}
          </div>
        </div>
        <div
          id="uploaded-videos"
          className={`${activeTab === "videos" ? "" : "hidden"} mt-4`}
        >
          <div id="uploaded-videos-grid" className="css-grid">
            {/* Render uploaded videos here */}
            {uploadedVideos.length > 0 ? (
              uploadedVideos.map((video, index) => (
                <video key={index} controls className="w-full h-auto">
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))
            ) : (
              <p>No videos uploaded.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTool;
