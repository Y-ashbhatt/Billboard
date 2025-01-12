import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center">

      <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">

        <h1 className="text-4xl text-gray-800 font-bold mb-4">
          Welcome to Billboard Creator
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Seamlessly design and transform your billboards with AI-powered tools. Upload banners, process them, and preview your results in seconds.
        </p>
        <Button
          label="Generate New Billboard"
          onClick={() => navigate("/upload-billboard")}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export default Home;
