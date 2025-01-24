import React, { useState } from "react";
import Toolbar from "./_component/Toolbar";
import Template from "./_component/Template";
import TextTool from "./_component/TextTool";
import ObjectTool from "./_component/ObjectTool";
import ImageTool from "./_component/ImageTool";
import UploadTool from "./_component/UploadTool";
import Setting from "./_component/Setting";
import Canvas from "./_component/Canvas";

const Edit = () => {
  const [activeTool, setActiveTool] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToolsClick = (option) => {
    if (activeTool === option && showSidebar) {
      // If the same icon is clicked and sidebar is already open, close it
      setShowSidebar(false);
      setActiveTool("");
    } else {
      // Otherwise, open the sidebar and set the active tool
      setActiveTool(option);
      setShowSidebar(true);
    }
  };

  const closeSidebar = () => {
    setShowSidebar(false); // Hide the sidebar
    setActiveTool(""); // Reset the active tool
  };

  return (
    <>
      <div className="flex">
        {/* Toolbar */}
        <Toolbar handleToolsClick={handleToolsClick} />

        {/* Sidebar */}
        <div
          className={`relative h-[calc(100%-0px)] max-w-[320px] bg-[var(--color-1)] border-r border-[var(--color-4)] top-0 box-border z-[999999] overflow-hidden transition-transform duration-300 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          {showSidebar && (
            <div className="flex justify-between items-center bg-[var(--color-2)] text-white px-4 py-3 border-b border-[var(--color-4)]">
              <h2 className="text-lg font-bold">
                {activeTool
                  ? activeTool.charAt(0).toUpperCase() + activeTool.slice(1)
                  : "Sidebar"}
              </h2>
              <button
                onClick={closeSidebar}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
              >
                Close
              </button>
            </div>
          )}

          {/* Sidebar Content */}
          {showSidebar && (
            <div className="p-3">
              {activeTool === "setting" && <Setting />}
              {activeTool === "template" && <Template />}
              {activeTool === "text" && <TextTool />}
              {activeTool === "object" && <ObjectTool />}
              {activeTool === "upload" && <UploadTool />}
              {activeTool === "image" && <ImageTool />}
            </div>
          )}
        </div>

        {/* Canvas */}
        <div
          className={`transition-all duration-300 flex-1 ${
            showSidebar ? "ml-0" : "flex justify-center items-center"
          }`}
        >
          <Canvas />
        </div>
      </div>
    </>
  );
};

export default Edit;
