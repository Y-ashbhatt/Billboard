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
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#f3f3f3",
    });
    setCanvas(newCanvas);

    newCanvas.on("object:modified", saveHistory);
    newCanvas.on("object:added", saveHistory);
    newCanvas.on("object:selected", updateActiveObjectProperties);
    newCanvas.on("selection:updated", updateActiveObjectProperties);

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        undo();
      } else if (e.ctrlKey && e.key === "y") {
        e.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      newCanvas.dispose();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const saveHistory = () => {
    setRedoStack([]);
    setHistory((prev) => [...prev, JSON.stringify(canvas)]);
  };

  const undo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack((prev) => [...prev, JSON.stringify(canvas)]);
      setHistory([...history]);
      canvas.loadFromJSON(lastState, () => canvas.renderAll());
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack.pop();
      setHistory((prev) => [...prev, JSON.stringify(canvas)]);
      canvas.loadFromJSON(nextState, () => canvas.renderAll());
    }
  };

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
        activeObject.type === "circle"
      ) {
        setFillColor(activeObject.fill || "#00bcd4");
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
      radius: 50,
    });
    canvas.add(circle).setActiveObject(circle);
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

  return (
    <div className="flex flex-col items-center p-4">
      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center gap-4 bg-gray-100 p-3 rounded shadow">
        {/* Add Elements */}
        <button
          onClick={addText}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Text
        </button>
        <button
          onClick={addRectangle}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Rectangle
        </button>
        <button
          onClick={addCircle}
          className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Add Circle
        </button>

        {/* Font Controls */}
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

        {/* Style Controls */}
        <button
          onClick={toggleBold}
          className={`px-3 py-2 rounded ${
            isBold ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Bold
        </button>
        <button
          onClick={toggleItalic}
          className={`px-3 py-2 rounded ${
            isItalic ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Italic
        </button>
        <button
          onClick={toggleUnderline}
          className={`px-3 py-2 rounded ${
            isUnderline ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Underline
        </button>

        {/* Alignment */}
        <button
          onClick={() => updateAlignment("left")}
          className={`px-3 py-2 rounded ${
            alignment === "left" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Left
        </button>
        <button
          onClick={() => updateAlignment("center")}
          className={`px-3 py-2 rounded ${
            alignment === "center" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Center
        </button>
        <button
          onClick={() => updateAlignment("right")}
          className={`px-3 py-2 rounded ${
            alignment === "right" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          Right
        </button>

        {/* Export */}
        <button
          onClick={exportCanvas}
          className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Export
        </button>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="border border-gray-300 shadow-lg" />
    </div>
  );
};

export default FabricCanvas;
