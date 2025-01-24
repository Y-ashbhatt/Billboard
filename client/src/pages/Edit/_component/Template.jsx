import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const templates = [
  {
    id: 1,
    json: "/templates/1.json",
    img: "/templates/1.png",
    title: "Template 1",
  },
  {
    id: 2,
    json: "/templates/2.json",
    img: "/templates/2.png",
    title: "Template 2",
  },
  {
    id: 3,
    json: "/templates/3.json",
    img: "/templates/3.png",
    title: "Template 3",
  },
  {
    id: 4,
    json: "/templates/4.json",
    img: "/templates/4.png",
    title: "Template 4",
  },
  {
    id: 5,
    json: "/templates/5.json",
    img: "/templates/5.png",
    title: "Template 5",
  },
  {
    id: 6,
    json: "/templates/6.json",
    img: "/templates/6.png",
    title: "Template 6",
  },
  {
    id: 7,
    json: "/templates/7.json",
    img: "/templates/7.png",
    title: "Template 7",
  },
  {
    id: 8,
    json: "/templates/8.json",
    img: "/templates/8.png",
    title: "Template 8",
  },
  {
    id: 9,
    json: "/templates/9.json",
    img: "/templates/9.png",
    title: "Template 9",
  },
  {
    id: 10,
    json: "/templates/10.json",
    img: "/templates/10.png",
    title: "Template 10",
  },
  {
    id: 11,
    json: "/templates/11.json",
    img: "/templates/11.png",
    title: "Template 11",
  },
  {
    id: 12,
    json: "/templates/12.json",
    img: "/templates/12.png",
    title: "Template 12",
  },
];

const Template = ({ closeSidebar }) => {
  const [activeTab, setActiveTab] = useState("project-library");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" bg-white text-gray-800 shadow-lg rounded">
      <div className="tool-content px-2 ">
        <p className="text-lg uppercase font-bold inline-block mb-4">
          Templates
        </p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 110px" }}
          />
        </button>
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-between w-full">
            <button
              className={`px-[5px] py-2 font-xs ${
                activeTab === "project-library"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded`}
              onClick={() => handleTabClick("project-library")}
            >
              Template Library
            </button>
            <button
              className={`px-[5px] py-2 font-xs ${
                activeTab === "my-templates"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded`}
              onClick={() => handleTabClick("my-templates")}
            >
              My Templates
            </button>
          </div>
        </div>

        {activeTab === "project-library" && (
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="image-grid-item border rounded-lg overflow-hidden shadow-sm"
                title={template.title}
              >
                <div className="img-wrap">
                  <img
                    src={template.img}
                    alt={template.title}
                    className="w-full h-32 object-cover"
                    draggable="false"
                  />
                </div>
                <div className="p-2 text-center font-medium">
                  {template.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "my-templates" && (
          <div className="text-center">
            <p className="text-gray-600">
              No templates found in your collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
