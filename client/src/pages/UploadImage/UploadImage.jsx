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
    const navigate = useNavigate()
    const baseURL = 'http://localhost:5000/api';


    // Function to fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);

            const formData = new FormData();
            if (billboard) formData.append('billboard', billboard);
            if (banner) formData.append('banner', banner);

            // Make the API request
            const response = await axios.post(`${baseURL}/generate-billboard`, formData, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setError(false);
                // Store the image in sessionStorage
                if (response.data.image) {
                    sessionStorage.setItem('generatedImage', response.data.image);
                }

                navigate('/success');
            }
        } catch (err) {
            console.error('API Error:', err);
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
            return
        }
        fetchData()
    };

    return (
        <>
            {error && (<Error errorMsg='Sorry, Some Internal server error has occured, Please try later' />)}
            {!error && (
                <div className="h-screen w-screen  flex flex-col items-center justify-center">
                    {currentStep === 1 && (
                        <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
                            <h1 className="text-3xl text-gray-800 font-bold mb-4">
                                Upload Billboard Image
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                Upload the image that you want to use for the billboard. Once uploaded, proceed to the next step to upload your banner.
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
                                Select the banner image you want to place on the billboard. Once uploaded, you can proceed to process it with AI.
                            </p>

                            <FileUploader
                                label="Choose Banner Image"
                                onFileChange={(file) => setBanner(file)}
                            />

                            <Button
                                label={loading ? "Processing..." : "Process with AI"}
                                onClick={handleSubmit}
                                className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                disabled={loading}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UploadImage;
