import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNotification } from '../../context/NotificationContext';

const PreviewPage = () => {

  const location = useLocation();
  const finalBillboardImage = location.state?.finalBillboard || '/billboardimg.jpeg';
  const billboardId = location.state?.billboardId;
  console.log(billboardId);
  const navigate = useNavigate('/upload')
  const { showNotification } = useNotification()
  const [imageType, setimageType] = useState('png')
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
    type: '',
    billboardId : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };


  const handleImageTypeChange = (e) => {
    setimageType(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.tags || !formData.link || !formData.description || !formData.type) {
      showNotification('Please Fill All Information')
      return
    }
    try {
      let body = formData;
      body = {...body, billboardId : billboardId}
      const response = await axios.post('http://localhost:5000/user/save-final-billboard', body, { withCredentials: true });
      if (response.status === 200) {
        showNotification('Image details saved successfully!');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      showNotification('Sorry,There was an error saving image details.');
    }
  };


  const handleDownload = async () => {
    if (!finalBillboardImage) {
      showNotification('No Image Found To Download')
      return
    }
    try {
      const response = await fetch(finalBillboardImage);
      if (!response.ok) {
        showNotification('Failed to fetch image from the server.');
        return;
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      // Create a URL for the Blob
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `processed-image.${imageType}`;
      link.click();
    }
    catch (error) {
      showNotification("Error while downloading image")
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4">
      {/* <h1 className="text-3xl font-bold text-purple-600 mb-6">Preview Your Billboard</h1> */}

      <div className="flex w-full max-w-7xl gap-8">
        {/* Left Section with Image */}
        <div className="flex-1 bg-gray-100 w-1/2 p-4 rounded-lg shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-purple-600">Preview Image</h2>
            <div className="mt-4">
              <img src={finalBillboardImage} alt="Billboard Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 ">
              <button type="button" className="bg-purple-600 text-white py-2 px-7 rounded-md hover:bg-gray-400 focus:outline-none"
                onClick={handleDownload} >
                Download
              </button>
              <select
                name="imageType"
                value={imageType}
                onChange={handleImageTypeChange}
                className="mt-2 p-2 w-fit rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Section with Input Fields */}
        <div className="flex-1 p-4 w-1/2 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-600 mb-6">Enter Details</h2>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="tags" className="text-sm font-medium text-gray-700">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="link" className="text-sm font-medium text-gray-700">Link (Website or Video)</label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                <ReactQuill
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className="w-full mt-2"
                  modules={{
                    toolbar: [
                      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                      ['bold', 'italic', 'underline'],
                      [{ 'align': [] }],
                      // ['link', 'image'],
                      ['blockquote'],
                      [{ 'color': [] }],
                      // [{ 'color': [] }, { 'background': [] }],
                    ],
                  }}
                />
              </div>

              <div>
                <label htmlFor="type" className="text-sm font-medium text-gray-700"> Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="branding">Branding</option>
                  <option value="promotion">Promotion</option>
                  <option value="awareness">Awareness</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Save
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;




// // import React from "react";
// // import { useNavigate,useLocation } from "react-router-dom";
// // import Sidebar from "../../components/Sidebar";

// // const PreviewPage = () => {

// //   const location = useLocation();
// //   const finalBillboardImage = location.state?.finalBillboard;
// //   const navigate = useNavigate('/upload')

// //   const handleDownload = () => {
// //     const link = document.createElement("a");
// //     link.href = finalBillboardImage;
// //     link.download = "updated-billboard.png";
// //     link.click();
// //   };

// //   return (
// //     <div className="bg-white min-h-screen flex">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <main className="mr-10 ml-28 flex-1 p-6">
// //         {/* Header */}
// //         <header className="flex justify-between items-center mb-6">
// //           {/* Search Bar */}

// //         </header>

// //         <div className="block mx-auto w-fit ">
// //         <div className="flex mt-2 mb-6">
// //           <h1 className="text-3xl text-center w-full font-bold">Download Billboard</h1>
// //         </div>
// //         {/* Image Preview */}
// //         {finalBillboardImage ? (
// //           <img
// //             src={finalBillboardImage}
// //             alt="Processed Image"
// //             className="h-[300px] max-w-lg rounded-lg shadow-lg mb-6"
// //           />
// //         ) : (
// //           <p className="text-lg text-gray-700 mb-6">
// //             No image available for preview.
// //           </p>
// //         )}

// //         {/* Download Button */}
// //         <button
// //           onClick={handleDownload}
// //           className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow transition-all block mx-auto"
// //         >
// //           Download Image
// //         </button>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default PreviewPage;