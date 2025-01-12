import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploader from "../../components/FileUploader";
import Button from "../../components/Button";

const UploadBanner = () => {
  const [banner, setBanner] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Upload Your Banner
      </h1>
      <p className="text-lg text-gray-200 mb-8 max-w-lg">
        Select the banner image you want to place on the billboard. Once uploaded, process it with AI to see the results!
      </p>
      {/* File Uploader */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <FileUploader
          label="Choose a Banner Image"
          onFileChange={(file) => setBanner(file)}
        />
      </div>
      {/* Process with AI Button */}
      <Button
        label="Process with AI"
        onClick={() => navigate("/success")}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
        disabled={!banner}
      />
    </div>
  );
};

export default UploadBanner;
