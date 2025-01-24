import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const shapes = [
  "/objects/shapes/1.svg",
  "/objects/shapes/2.svg",
  "/objects/shapes/3.svg",
  "/objects/shapes/4.svg",
  "/objects/shapes/5.svg",
  "/objects/shapes/6.svg",
  "/objects/shapes/7.svg",
  "/objects/shapes/8.svg",
  "/objects/shapes/9.svg",
  "/objects/shapes/10.svg",
  "/objects/shapes/11.svg",
  "/objects/shapes/12.svg",
];
const emojis = [
  "/objects/emojis/1.svg",
  "/objects/emojis/2.svg",
  "/objects/emojis/3.svg",
  "/objects/emojis/4.svg",
  "/objects/emojis/5.svg",
  "/objects/emojis/6.svg",
  "/objects/emojis/7.svg",
  "/objects/emojis/8.svg",
  "/objects/emojis/9.svg",
  "/objects/emojis/10.svg",
  "/objects/emojis/11.svg",
  "/objects/emojis/12.svg",
];
const others = [
  "/objects/others/1.svg",
  "/objects/others/2.svg",
  "/objects/others/3.svg",
  "/objects/others/4.svg",
  "/objects/others/5.svg",
  "/objects/others/6.svg",
  "/objects/others/7.svg",
  "/objects/others/8.svg",
  "/objects/others/9.svg",
  "/objects/others/10.svg",
  "/objects/others/11.svg",
  "/objects/others/12.svg",
];

const ObjectTool = ({ closeSidebar }) => {
  return (
    <div className="hidden sm:block bg-white shadow-lg rounded-lg p-4">
      <div className="">
        <p className="text-lg font-bold inline-block uppercase mb-4">Objects</p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 130px" }}
          />
        </button>

        {/* Shapes Section */}
        <div>
          <p className="text-md font-semibold text-gray-700">Shapes</p>
          <div className=" flex justify-evenly flex-wrap mt-2">
            {shapes.map((shape, index) => (
              <div
                key={index}
                className="group relative p-2 my-1 rounded-md bg-gray-400"
              >
                <img
                  className="cursor-pointer hover:scale-105 h-10 w-10 transition-transform"
                  src={shape}
                  alt={`Shape`}
                  draggable="false"
                  data-file={shape}
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-2 bg-[#7e22ce] text-white py-2 text-sm rounded-lg hover:bg-[#a134ff] transition duration-200">
            Load More
          </button>
        </div>

        {/* Emojis Section */}
        <div>
          <p className="text-md font-semibold text-gray-700">Emojis</p>
          <div className=" flex justify-evenly flex-wrap mt-2">
            {emojis.map((emoji, index) => (
              <div
                key={index}
                className="group relative p-2 my-1 rounded-md bg-gray-400"
              >
                <img
                  className="cursor-pointer hover:scale-105 h-10 w-10 transition-transform"
                  src={emoji}
                  alt={`Emoji`}
                  draggable="false"
                  data-file={emoji}
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-2 bg-[#7e22ce] text-white py-2 text-sm rounded-lg hover:bg-[#a134ff] transition duration-200">
            Load More
          </button>
        </div>

        {/* Others Section */}
        <div>
          <p className="text-md font-semibold text-gray-700">Others</p>
          <div className=" flex justify-evenly flex-wrap mt-2">
            {others.map((other, index) => (
              <div
                key={index}
                className="group relative p-2 my-1 rounded-md bg-gray-400"
              >
                <img
                  className="cursor-pointer hover:scale-105 h-10 w-10 transition-transform"
                  src={other}
                  alt={`Other`}
                  draggable="false"
                  data-file={other}
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-2 bg-[#7e22ce] text-white py-2 text-sm rounded-lg hover:bg-[#a134ff] transition duration-200">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectTool;
