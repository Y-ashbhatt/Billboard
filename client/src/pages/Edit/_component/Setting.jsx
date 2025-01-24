import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Setting = ({ closeSidebar }) => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-md">
        <p className="text-lg font-bold inline-block uppercase  mb-4">Text</p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 170px" }}
          />
        </button>
        <div>
          {/* <div className="bg-gray-50 p-4 rounded-md mb-4">
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <span className="material-icons">transform</span>Click To Crop
                Image
              </button>
            </div> */}
          <div className="py-4 bg-white rounded-md shadow-sm">
            <p className="text-lg font-bold  text-gray-800 mb-2">
              Canvas Settings
            </p>
            <div className="mb-4 flex gap-5 justify-between items-center">
              <label className="block text-sm font-medium text-gray-800">
                Width
              </label>
              <input
                className=" border border-gray-300 rounded-md w-32 p-2"
                type="number"
                min="1"
              />
            </div>
            <div className="mb-4 flex gap-5 justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <input
                className="w-32 border border-gray-300 rounded-md p-2"
                type="number"
                min="1"
              />
            </div>
            <div className="mb-4 flex gap-5 justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Background
              </label>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border rounded bg-gray-500"></div>
                <input
                  className="w-32 border border-gray-300 rounded-md p-2"
                  type="text"
                  value="#888888"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-4 flex gap-5 justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Duration (sec)
              </label>
              <input
                className="w-32 border border-gray-300 rounded-md p-2"
                type="number"
                defaultValue="4"
              />
            </div>
            <hr className="my-4" />
            <p className="text-md font-medium text-gray-800 mb-2">Presets</p>
            <div className="grid grid-cols-2 gap-4">
              <PresetOption width="1080" height="1080" ratio="1:1" />
              <PresetOption width="720" height="720" ratio="1:1" />
              <PresetOption width="600" height="600" ratio="1:1" />
              <PresetOption width="1080" height="1350" ratio="4:5" />
              <PresetOption width="1280" height="720" ratio="16:9" />
              <PresetOption width="640" height="360" ratio="16:9" />
              <PresetOption width="720" height="1280" ratio="9:16" />
              <PresetOption width="360" height="640" ratio="9:16" />
              <PresetOption width="640" height="480" ratio="4:3" />
              <PresetOption width="480" height="360" ratio="4:3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PresetOption = ({ width, height, ratio }) => (
  <div className="p-2 border rounded-md text-center hover:bg-gray-200 cursor-pointer bg-gray-200 ">
    <div className="text-sm text-gray-600">{ratio}</div>
    {width}x{height}px
  </div>
);

export default Setting;
