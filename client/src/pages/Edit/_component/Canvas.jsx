import React from "react";

const Canvas = () => {
  return (
    <div className="canvas-area w-full">
      {/* TOP CANVAS CONTROLS */}
      <div className="top-canvas-controls flex justify-start space-x-4 p-4 bg-gray-200">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <span className="material-icons">delete</span>
          <span className="hidden sm:inline">Clear</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <span className="material-icons">redo</span>
          <span className="hidden sm:inline">Redo</span>
        </button>
      </div>

      {/* TOP CANVAS MENU */}
      <div className="top-canvas-menu flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
        <button className="theme-switcher p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <span className="material-icons">wb_sunny</span>
        </button>
        <div className="user-menu relative">
          <div className="dropdown-wrap flex items-center space-x-2 cursor-pointer">
            <img
              alt="avatar"
              src="assets/avatar.png"
              className="w-8 h-8 rounded-full"
            />
            <span className="material-icons">arrow_drop_down</span>
          </div>
          <div className="menu-container absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
            <ul className="dropdown flex flex-col text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span className="material-icons">home</span>Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span className="material-icons">article</span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span className="material-icons">email</span>Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM CANVAS */}
      <div className="bottom-canvas flex justify-between items-center p-4 bg-gray-200">
        <button
          title="Hand tool"
          className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md"
        >
          <span className="material-icons">pan_tool</span>
        </button>
        <div className="zoom-level flex items-center space-x-4">
          <button
            title="Zoom out"
            className="p-2 text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="material-icons">remove</span>
          </button>
          <span className="text-gray-700">100%</span>
          <button
            title="Zoom in"
            className="p-2 text-gray-700 hover:bg-gray-300 rounded-md"
          >
            <span className="material-icons">add</span>
          </button>
        </div>
      </div>

      {/* LOADING INDICATORS */}
      {/* <div className="load-media  flex items-center justify-center">
        <div className="loader w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        <span className="text-gray-600 ml-2">Loading...</span>
      </div> */}

      {/* CANVAS */}
      <canvas className="w-full h-full border border-gray-300"></canvas>
      <div className="hidden">
        <canvas></canvas>
      </div>
    </div>
  );
};

export default Canvas;
