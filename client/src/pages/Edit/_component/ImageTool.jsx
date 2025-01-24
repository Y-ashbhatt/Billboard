// ImageTool.js (Component)
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const ImageTool = ({ closeSidebar }) => {
  const [activeTab, setActiveTab] = useState("pixabay-images");
  const [pixabaySearch, setPixabaySearch] = useState("");
  const [pexelsSearch, setPexelsSearch] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePixabaySearchChange = (e) => {
    setPixabaySearch(e.target.value);
  };

  const handlePexelsSearchChange = (e) => {
    setPexelsSearch(e.target.value);
  };

  return (
    <div className="">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <p className="text-lg font-bold inline-block uppercase mb-4">Image</p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 170px" }}
          />
        </button>
        <div className="mt-4">
          <div className="flex w-full justify-between font-semibold text-sm">
            <div
              className={`px-4 py-2 cursor-pointer  border-b-4 w-1/2 text-center border-gray-300 ${
                activeTab === "pixabay-images"
                  ? " border-[#a134ff] "
                  : " border-gray-300"
              }`}
              onClick={() => handleTabClick("pixabay-images")}
            >
              Pixabay
            </div>
            <div
              className={`px-4 py-2 cursor-pointer border-b-4 w-1/2 text-center  border-gray-300 ${
                activeTab === "pexels-images"
                  ? " border-[#a134ff] "
                  : "border-gray-300"
              }`}
              onClick={() => handleTabClick("pexels-images")}
            >
              Pexels
            </div>
          </div>

          <div
            className={`mt-4 ${activeTab === "pixabay-images" ? "" : "hidden"}`}
          >
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  className="form-input p-2 border text-sm rounded-md w-full"
                  type="text"
                  value={pixabaySearch}
                  onChange={handlePixabaySearchChange}
                  placeholder="Enter a keyword..."
                />
                <button
                  className="btn bg-[#a134ff] text-white p-2 rounded-md"
                  onClick={() =>
                    console.log(`Searching Pixabay for ${pixabaySearch}`)
                  }
                >
                  <SearchIcon />
                </button>
              </div>

              <div className="space-y-2">
                <select className="custom-select w-full p-2 text-sm border rounded-md">
                  <option value="">All Orientations</option>
                  <option value="horizontal">Horizontal</option>
                  <option value="vertical">Vertical</option>
                </select>
                <select className="custom-select w-full p-2 text-sm border rounded-md">
                  <option value="">All Colors</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                  <option value="grayscale">Grayscale</option>
                  <option value="brown">Brown</option>
                  <option value="blue">Blue</option>
                  <option value="turquoise">Turquoise</option>
                  <option value="red">Red</option>
                  <option value="lilac">Lilac</option>
                  <option value="pink">Pink</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                </select>
                <select className="custom-select w-full p-2 text-sm border rounded-md">
                  <option value="">All Categories</option>
                  <option value="backgrounds">Backgrounds</option>
                  <option value="fashion">Fashion</option>
                  <option value="nature">Nature</option>
                  <option value="science">Science</option>
                  <option value="education">Education</option>
                  <option value="feelings">Feelings</option>
                  <option value="health">Health</option>
                  <option value="people">People</option>
                  <option value="religion">Religion</option>
                  <option value="places">Places</option>
                  <option value="animals">Animals</option>
                  <option value="industry">Industry</option>
                  <option value="computer">Computer</option>
                  <option value="food">Food</option>
                  <option value="sports">Sports</option>
                  <option value="transportation">Transportation</option>
                  <option value="travel">Travel</option>
                  <option value="buildings">Buildings</option>
                  <option value="business">Business</option>
                  <option value="music">Music</option>
                </select>
              </div>

              <div className="mt-4">
                <button
                  className="bg-gray-300 p-2 rounded-md"
                  onClick={() => console.log("Show more settings")}
                >
                  More Settings{" "}
                  <span className="material-icons">expand_more</span>
                </button>
              </div>

              <div className="mt-4">
                <div>
                  Photos provided by{" "}
                  <a
                    href="https://pixabay.com/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Pixabay
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-4 ${activeTab === "pexels-images" ? "" : "hidden"}`}
          >
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  className="form-input p-2 border rounded-md w-full"
                  type="text"
                  value={pexelsSearch}
                  onChange={handlePexelsSearchChange}
                  placeholder="Enter a keyword..."
                />
                <button
                  className="btn bg-blue-500 text-white p-2 rounded-md"
                  onClick={() =>
                    console.log(`Searching Pexels for ${pexelsSearch}`)
                  }
                >
                  <span className="material-icons">search</span>
                </button>
              </div>

              <div className="space-y-2">
                <select
                  className="custom-select w-full p-2 border rounded-md"
                  disabled
                >
                  <option value="">All Orientations</option>
                  <option value="landscape">Landscape</option>
                  <option value="portrait">Portrait</option>
                  <option value="square">Square</option>
                </select>
                <select
                  className="custom-select w-full p-2 border rounded-md"
                  disabled
                >
                  <option value="">All Colors</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                  <option value="brown">Brown</option>
                  <option value="blue">Blue</option>
                  <option value="turquoise">Turquoise</option>
                  <option value="red">Red</option>
                  <option value="violet">Violet</option>
                  <option value="pink">Pink</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                </select>
              </div>

              {/* <div className="mt-4">
                <button
                  className="bg-gray-300 p-2 rounded-md"
                  onClick={() => console.log('Show more settings')}
                >
                  More Settings <span className="material-icons">expand_more</span>
                </button>
              </div> */}

              <div className="mt-4">
                <div>
                  Photos provided by{" "}
                  <a
                    href="https://pexels.com/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Pexels
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTool;
