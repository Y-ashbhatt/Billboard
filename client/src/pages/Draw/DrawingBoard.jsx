import React from "react";
import Sidebar from "../../components/Sidebar";
import { Excalidraw } from "@excalidraw/excalidraw";

const DrawingBoard = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <header className="p-6 bg-white shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              Create Your Banner
            </h1>
          </header>

          <div className="flex-1 bg-white shadow rounded-lg m-6">
            <Excalidraw />
          </div>
        </main>
      </div>
    </>
  );
};

export default DrawingBoard;
