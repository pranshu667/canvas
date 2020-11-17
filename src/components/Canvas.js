import React, { useState, useEffect, useRef } from "react";
import "./styles/Canvas.css";
function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [width, setWidth] = useState(window.innerWidth * 0.8);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = window.innerHeight * 0.97;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${window.innerHeight * 0.97}px`;

    const context = canvas.getContext("2d");
    //context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "yellow";
    context.lineWidth = 5;

    contextRef.current = context;
  }, [width]);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth * 0.8);
  });

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    var context = contextRef.current;

    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    var context = contextRef.current;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const finishDrawing = () => {
    var context = contextRef.current;
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <div>
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}></canvas>
    </div>
  );
}

export default Canvas;
