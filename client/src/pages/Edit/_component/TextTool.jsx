import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const TextTool = ({ closeSidebar }) => {
  return (
    <div className=" p-4 bg-white shadow-lg rounded-md">
      <div className="">
        <p className="text-lg font-bold inline-block uppercase mb-4">Text</p>
        <button onClick={closeSidebar} className="mb-2">
          <KeyboardDoubleArrowLeftIcon
            style={{ color: "black", margin: "0px 0px 6px 170px" }}
          />
        </button>
        <div className="space-y-6">
          <section>
            <p className="text-base font-semibold  mb-2">Basic Text</p>
            <div className="space-y-2">
              <div
                className="cursor-pointer text-2xl text-left py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200"
                data-font="Roboto"
              >
                Add a heading
              </div>
              <div
                className="cursor-pointer text-lg text-left py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200"
                data-font="Roboto"
              >
                Add a subheading
              </div>
              <div
                className="cursor-pointer text-sm text-left py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200"
                data-font="Roboto"
              >
                Add body text
              </div>
            </div>
          </section>

          <section>
            <p className="text-sm font-semibold mb-2">Animated</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "fade in", img: "/text/fade-in.svg", label: "Fade In" },
                {
                  id: "typewriter",
                  img: "/text/typewriter.svg",
                  label: "Typewriter",
                },
                {
                  id: "slide top",
                  img: "/text/slide-top.svg",
                  label: "Slide Top",
                },
                {
                  id: "slide bottom",
                  img: "/text/slide-bottom.svg",
                  label: "Slide Bottom",
                },
                {
                  id: "slide left",
                  img: "/text/slide-left.svg",
                  label: "Slide Left",
                },
                {
                  id: "slide right",
                  img: "/text/slide-right.svg",
                  label: "Slide Right",
                },
                { id: "scale", img: "/text/scale.svg", label: "Scale" },
                { id: "shrink", img: "/text/shrink.svg", label: "Shrink" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center cursor-pointer p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                  data-id={item.id}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className=" h-14 object-contain mb-2"
                  />
                  <div className="text-xs font-light">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            {[
              {
                title: "Sans Serif",
                fonts: ["Roboto", "Montserrat", "Poppins"],
              },
              {
                title: "Serif",
                fonts: ["Playfair Display", "Merriweather", "IBM Plex Serif"],
              },
              {
                title: "Monospace",
                fonts: ["Roboto Mono", "Inconsolata", "Source Code Pro"],
              },
              {
                title: "Handwriting",
                fonts: ["Dancing Script", "Pacifico", "Indie Flower"],
              },
              {
                title: "Display",
                fonts: ["Lobster", "Bebas Neue", "Titan One"],
              },
            ].map((group) => (
              <div key={group.title}>
                <p className="text-lg font-semibold mb-2">{group.title}</p>
                <div className="space-y-2">
                  {group.fonts.map((font) => (
                    <div
                      key={font}
                      className="cursor-pointer text-center py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 font"
                      data-font={font}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TextTool;
