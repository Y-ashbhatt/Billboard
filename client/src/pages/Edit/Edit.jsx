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
      setShowSidebar(false); // Close sidebar
      setActiveTool(""); // Reset active tool
    } else {
      setActiveTool(option); // Open sidebar with the new tool
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
          {/* Sidebar Content */}
          {showSidebar && (
            <div className="p-3">
              {activeTool === "setting" && (
                <Setting closeSidebar={closeSidebar} />
              )}
              {activeTool === "template" && (
                <Template closeSidebar={closeSidebar} />
              )}
              {activeTool === "text" && (
                <TextTool closeSidebar={closeSidebar} />
              )}
              {activeTool === "object" && (
                <ObjectTool closeSidebar={closeSidebar} />
              )}
              {activeTool === "upload" && (
                <UploadTool closeSidebar={closeSidebar} />
              )}
              {activeTool === "image" && (
                <ImageTool closeSidebar={closeSidebar} />
              )}
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
