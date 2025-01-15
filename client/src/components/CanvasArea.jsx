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
      width: 800,
      height: 600,
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

  return (
    <div className="flex p-4">
      {/* Toolbar */}
      <div className="mb-4 flex flex-col gap-4 bg-gray-100 p-4 rounded shadow">
        {/* Elements Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Elements</h3>
          <button
            onClick={addText}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Text
          </button>
          <button
            onClick={addRectangle}
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Rectangle
          </button>
          <button
            onClick={addCircle}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Add Circle
          </button>
          <button
            onClick={addTriangle}
            className="px-2 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Add Triangle
          </button>
          <button
            onClick={addLine}
            className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Add Line
          </button>
          <button
            onClick={addPolygon}
            className="px-2 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Add Polygon
          </button>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="imageUpload"
            >
              Upload Image:
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e)}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
          </div>
        </div>

        {/* Text Settings Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Text Settings</h3>
          <div className="flex items-center space-x-2">
            <label>Font Size:</label>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => updateFontSize(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label>Font:</label>
            <select
              value={fontFamily}
              onChange={(e) => updateFontFamily(e.target.value)}
              className="px-2 py-1 border rounded"
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label>Font Color:</label>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => updateFontColor(e.target.value)}
              className="px-2 py-1 border rounded"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleBold}
              className={`px-3 py-1 rounded ${
                isBold ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              B
            </button>
            <button
              onClick={toggleItalic}
              className={`px-3 py-1 rounded ${
                isItalic ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              I
            </button>
            <button
              onClick={toggleUnderline}
              className={`px-3 py-1 rounded ${
                isUnderline ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              U
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <label>Alignment:</label>
            <select
              value={alignment}
              onChange={(e) => updateAlignment(e.target.value)}
              className="px-2 py-1 border rounded"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        {/* Shape Settings Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Shape Settings</h3>
          <div className="flex items-center space-x-2">
            <label>Fill Color:</label>
            <input
              type="color"
              value={fillColor}
              onChange={(e) => updateFillColor(e.target.value)}
              className="px-2 py-1 border rounded"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label>Stroke Color:</label>
            <input
              type="color"
              value={strokeColor}
              onChange={(e) => updateStrokeColor(e.target.value)}
              className="px-2 py-1 border rounded"
            />
          </div>
        </div>

        {/* Object Controls */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Actions</h3>
          <button
            onClick={deleteObject}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Selected Object
          </button>
          <button
            onClick={exportCanvas}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Export Canvas
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="border border-gray-300 shadow-lg" />
    </div>
  );
};

export default FabricCanvas;
