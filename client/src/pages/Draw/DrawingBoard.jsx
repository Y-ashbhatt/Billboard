import React from "react";
import Sidebar from "../../components/Sidebar";
import { Excalidraw } from "@excalidraw/excalidraw";

const DrawingBoard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-28">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Create Your Banner
          </h1>
        </header>

        <div className="flex-1">
          <Excalidraw style={{ width: "100%", height: "100%" }} />
        </div>
      </main>
    </div>
  );
};

export default DrawingBoard;
