import React from "react";

const PreviewPage = () => {

  const finalImage = './preview.jpg'

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = finalImage;
    link.download = "updated-billboard.png";
    link.click();
  };

  return (
    <div className="h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6"> Billboard Preview</h1>
      {/* Image Preview */}
      {finalImage ? (
        <img
          src={finalImage}
          alt="Preview"
          className="w-full max-w-lg rounded-lg shadow-lg mb-6"
        />
      ) : (
        <p className="text-lg text-gray-700 mb-6">No image available for preview.</p>
      )}
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-all"
      >
        Download Image
      </button>
    </div>
  );
};

export default PreviewPage;
