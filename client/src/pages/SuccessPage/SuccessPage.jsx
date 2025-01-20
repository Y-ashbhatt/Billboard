import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";

const SuccessPage = () => {
  const location = useLocation();
  const finalBillboard = location.state?.finalBillboard;
  const navigate = useNavigate();

  return (
    // <div className="h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
    <div className="h-screen w-screen bg-white bg-cover bg-center flex flex-col items-center justify-center text-center">
      
      <h1 className="text-4xl font-bold text-gray-500 mb-4  ">
        Your Billboard is Ready!
      </h1>
      <p className="text-lg text-black mb-8 max-w-lg">
        Your image has been processed successfully. You can now preview or
        download the updated image.
      </p>
      <Button
        label=" Click To Preview"
        onClick={() => navigate("/preview", { state: { finalBillboard: finalBillboard }})}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
      />
    </div>
  );
};

export default SuccessPage;