import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

const FabricCanvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontColor, setFontColor] = useState("#000000");
  const [fillColor, setFillColor] = useState("#00bcd4");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [alignment, setAlignment] = useState("left");

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1200,
      height: 700,
      backgroundColor: "#f3f3f3",
    });
    setCanvas(newCanvas);

    newCanvas.on("object:selected", updateActiveObjectProperties);
    newCanvas.on("selection:updated", updateActiveObjectProperties);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const updateActiveObjectProperties = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      if (activeObject.type === "textbox") {
        setFontColor(activeObject.fill || "#000000");
        setFontSize(activeObject.fontSize || 20);
        setFontFamily(activeObject.fontFamily || "Arial");
        setIsBold(activeObject.fontWeight === "bold");
        setIsItalic(activeObject.fontStyle === "italic");
        setIsUnderline(!!activeObject.underline);
        setAlignment(activeObject.textAlign || "left");
      } else if (
        activeObject.type === "rect" ||
        activeObject.type === "circle" ||
        activeObject.type === "triangle" ||
        activeObject.type === "line" ||
        activeObject.type === "polygon"
      ) {
        setFillColor(activeObject.fill || "#00bcd4");
        setStrokeColor(activeObject.stroke || "#000000");
      }
    }
  };

  const addText = () => {
    const text = new fabric.Textbox("Editable Text", {
      left: 100,
      top: 100,
      fontSize,
      fontFamily,
      fill: fontColor,
      fontWeight: isBold ? "bold" : "normal",
      fontStyle: isItalic ? "italic" : "normal",
      underline: isUnderline,
      textAlign: alignment,
      editable: true,
    });
    canvas.add(text).setActiveObject(text);
  };

  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: fillColor,
      stroke: strokeColor,
      width: 100,
      height: 100,
    });
    canvas.add(rect).setActiveObject(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: fillColor,
      stroke: strokeColor,
      radius: 50,
    });
    canvas.add(circle).setActiveObject(circle);
  };
  const addTriangle = () => {
    const triangle = new fabric.Triangle({
      left: 150,
      top: 150,
      fill: fillColor,
      stroke: strokeColor,
      width: 100,
      height: 100,
    });
    canvas.add(triangle).setActiveObject(triangle);
  };

  const addLine = () => {
    const line = new fabric.Line([100, 100, 200, 200], {
      left: 100,
      top: 100,
      stroke: strokeColor,
    });
    canvas.add(line).setActiveObject(line);
  };

  const addPolygon = () => {
    const polygon = new fabric.Polygon(
      [
        { x: 200, y: 200 },
        { x: 300, y: 250 },
        { x: 250, y: 350 },
        { x: 150, y: 350 },
        { x: 100, y: 250 },
      ],
      {
        left: 100,
        top: 100,
        fill: fillColor,
        stroke: strokeColor,
      }
    );
    canvas.add(polygon).setActiveObject(polygon);
  };

  const updateFontSize = (size) => {
    setFontSize(size);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("fontSize", size);
      canvas.renderAll();
    }
  };

  const updateFontFamily = (family) => {
    setFontFamily(family);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("fontFamily", family);
      canvas.renderAll();
    }
  };

  const updateFontColor = (color) => {
    setFontColor(color);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("fill", color);
      canvas.renderAll();
    }
  };

  const updateFillColor = (color) => {
    setFillColor(color);
    const activeObject = canvas.getActiveObject();
    if (
      activeObject &&
      (activeObject.type === "rect" || activeObject.type === "circle")
    ) {
      activeObject.set("fill", color);
      canvas.renderAll();
    }
  };

  const updateStrokeColor = (color) => {
    setStrokeColor(color);
    const activeObject = canvas.getActiveObject();
    if (
      activeObject &&
      (activeObject.type === "rect" || activeObject.type === "circle")
    ) {
      activeObject.set("stroke", color);
      canvas.renderAll();
    }
  };

  const toggleBold = () => {
    setIsBold(!isBold);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("fontWeight", !isBold ? "bold" : "normal");
      canvas.renderAll();
    }
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("fontStyle", !isItalic ? "italic" : "normal");
      canvas.renderAll();
    }
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("underline", !isUnderline);
      canvas.renderAll();
    }
  };

  const updateAlignment = (align) => {
    setAlignment(align);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "textbox") {
      activeObject.set("textAlign", align);
      canvas.renderAll();
    }
  };

  const exportCanvas = () => {
    const dataURL = canvas.toDataURL({ format: "png", quality: 1.0 });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas.png";
    link.click();
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    console.log("File selected:", file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target.result;
      setTimeout(() => {
        fabric.FabricImageImage.fromURL(imageDataUrl, (img) => {
          if (canvas) {
            img.set({
              left: 100,
              top: 100,
              scaleX: 0.5,
              scaleY: 0.5,
            });
            canvas.add(img);
            canvas.renderAll();
          }
        });
      }, 0);
    };

    reader.onerror = (error) => {
      console.error("FileReader error:", error);
    };

    reader.readAsDataURL(file);
  };

  const deleteObject = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
    }
  };
  const [isTextSettingsOpen, setTextSettingsOpen] = useState(false);
  const [isShapeSettingsOpen, setShapeSettingsOpen] = useState(false);
  const [isActionsOpen, setActionsOpen] = useState(true);
  const [isElementsOpen, setElementsOpen] = useState(true); // Set Elements to be open by default

  return (
    <div className="flex p-6 space-x-6">
      {/* Toolbar */}
      <div className="w-72 bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
        {/* Elements Section */}
        <div>
          <button
            onClick={() => setElementsOpen(!isElementsOpen)}
            className="w-full py-2 text-left text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Elements
          </button>
          {isElementsOpen && (
            <div className="space-y-2 mt-2">
              <button
                onClick={addText}
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add Text
              </button>
              <button
                onClick={addRectangle}
                className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Add Rectangle
              </button>
              <button
                onClick={addCircle}
                className="w-full py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Add Circle
              </button>
              <button
                onClick={addTriangle}
                className="w-full py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Add Triangle
              </button>
              <button
                onClick={addLine}
                className="w-full py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Add Line
              </button>
              <button
                onClick={addPolygon}
                className="w-full py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Add Polygon
              </button>
              <div>
                <label
                  htmlFor="imageUpload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image:
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadImage(e)}
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Text Settings Section */}
        <div>
          <button
            onClick={() => setTextSettingsOpen(!isTextSettingsOpen)}
            className="w-full py-2 text-left text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Text Settings
          </button>
          {isTextSettingsOpen && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Font Size:</label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => updateFontSize(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Font:</label>
                <select
                  value={fontFamily}
                  onChange={(e) => updateFontFamily(e.target.value)}
                  className="w-32 px-2 py-1 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="Arial">Arial</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Font Color:</label>
                <input
                  type="color"
                  value={fontColor}
                  onChange={(e) => updateFontColor(e.target.value)}
                  className="w-10 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <button
                  onClick={toggleBold}
                  className={`w-10 py-2 text-lg font-bold rounded-lg ${
                    isBold
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-gray-300`}
                >
                  B
                </button>
                <button
                  onClick={toggleItalic}
                  className={`w-10 py-2 text-lg font-bold rounded-lg ${
                    isItalic
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-gray-300`}
                >
                  I
                </button>
                <button
                  onClick={toggleUnderline}
                  className={`w-10 py-2 text-lg font-bold rounded-lg ${
                    isUnderline
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-gray-300`}
                >
                  U
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Alignment:</label>
                <select
                  value={alignment}
                  onChange={(e) => updateAlignment(e.target.value)}
                  className="w-32 px-2 py-1 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Shape Settings Section */}
        <div>
          <button
            onClick={() => setShapeSettingsOpen(!isShapeSettingsOpen)}
            className="w-full py-2 text-left text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Shape Settings
          </button>
          {isShapeSettingsOpen && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Fill Color:</label>
                <input
                  type="color"
                  value={fillColor}
                  onChange={(e) => updateFillColor(e.target.value)}
                  className="w-10 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Stroke Color:</label>
                <input
                  type="color"
                  value={strokeColor}
                  onChange={(e) => updateStrokeColor(e.target.value)}
                  className="w-10 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Actions Section */}
        <div>
          <button
            onClick={() => setActionsOpen(!isActionsOpen)}
            className="w-full py-2 text-left text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Actions
          </button>
          {isActionsOpen && (
            <div className="space-y-2 mt-2">
              <button
                onClick={deleteObject}
                className="w-full py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete Selected Object
              </button>
              <button
                onClick={exportCanvas}
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Export Canvas
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Canvas */}
      <div className=" bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default FabricCanvas;
