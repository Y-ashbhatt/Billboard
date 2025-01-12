import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploader from "../../components/FileUploader";
import Button from "../../components/Button";

const UploadBillboard = () => {
    const [billboard, setBillboard] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
                <h1 className="text-3xl text-gray-800 font-bold mb-4">
                    Upload Billboard Image
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Upload the image that you want to use for the billboard. Once uploaded, proceed to the next step to edit and preview your design.
                </p>

                <FileUploader
                    label="Choose Billboard Image"
                    onFileChange={(file) => setBillboard(file)}
                />

                <Button
                    label="Next"
                    onClick={() => navigate("/upload-banner")}
                    className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={!billboard}
                />
            </div>
        </div>
    );
};

export default UploadBillboard;
