import React, {useState} from "react";
import Sidebar from "../../components/Sidebar";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";

const DrawingBoard = () => {

  const [exportedImages, setExportedImages] = useState([]);

  const handleExportImage = async () => {
    const exportedImage = await Excalidraw.getCanvas().toDataURL();
    setExportedImages((prevImages) => [...prevImages, exportedImage]);
  };

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
          <Excalidraw style={{ width: "100%", height: "100%" }}>
            <MainMenu>
              <MainMenu.DefaultItems.LoadScene />
              <MainMenu.DefaultItems.SaveToActiveFile onClick={handleExportImage} />
              <MainMenu.DefaultItems.Export   />
              <MainMenu.DefaultItems.SaveAsImage />
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.Help />
              <MainMenu.DefaultItems.ToggleTheme />
              <div className="mt-2 border-b"></div>
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
          </Excalidraw>
        </div>
         {/* Display exported images */}
         <div className="mt-4 flex flex-col items-center">
          {exportedImages.map((image, index) => (
            <div key={index} className="mb-4">
              <img src={image} alt={`Exported canvas ${index}`} className="max-w-full" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DrawingBoard;
