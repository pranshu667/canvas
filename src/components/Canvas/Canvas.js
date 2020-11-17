import React, { useRef, useEffect, useState, useContext } from "react";
import "./Canvas.css";
import { TabContext } from "../context/TabContextProvider";

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isDrawing, setIsDrawing] = useState(false);
  const { activeTabs, setActiveTabs } = useContext(TabContext);

  const [activeTool, activeColor] = [...activeTabs];

  const colors = ["red", "yellow", "green"];
  useEffect(() => {
    console.log("first render");
    var canvas = canvasRef.current;
    canvas.width = `${1300}`;
    canvas.height = `${600}`;
    canvas.style.width = `${1300}px`;
    canvas.style.height = `${600}px`;

    var context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = colors[activeColor];
    context.lineWidth = 5;

    contextRef.current = context;
    canvasRef.current = canvas;
  }, []);

  useEffect(() => {
    var context = contextRef.current;
    context.lineCap = "round";
    context.strokeStyle = colors[activeColor];
    context.lineWidth = 5;
  }, [activeColor]);

  // useEffect(() => {
  //   var canvas = contextRef.current.canvas;

  //   canvas.style.width = `${width}px`;
  //   canvas.style.height = `${height}px`;
  // }, [width, height]);

  // useEffect(() => {
  // //   console.log("second render");
  // //   // var canvas = canvasRef.current;

  // //   // canvas.style.width = `${width * 0.8}px`;
  // //   // canvas.style.height = `${height}px`;

  // // //   var context = contextRef.current;
  // // //   // context.canvas.width = 1.6 * width;
  // // //   // context.canvas.height = height * 1.6;
  // // //   context.canvas.style.width = `${width * 0.8}px`;
  // // //   context.canvas.style.height = `${height * 0.8}px`;
  // // //   context.scale(2, 2);
  // // //   context.lineCap = "round";
  // // //   // const xRatio = globalWidth / (width * 0.8);
  // // //   // const yRatio = globalHeight / (height * 0.8);
  // // //   // context.scale(xRatio, yRatio);
  // // //   context.strokeStyle = colors[activeColor];
  // // //   context.lineWidth = 5;
  // // //   //console.log(canvas.width, canvas.height);
  // // // }, [width, height]);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  function startDrawing({ nativeEvent }) {
    console.log("started drawing");
    const { clientX, clientY, offsetX, offsetY } = nativeEvent;
    console.log(clientX - offsetX, clientY - offsetY);
    var context = contextRef.current;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  }

  function Draw({ nativeEvent }) {
    if (!isDrawing) {
      return;
    }
    var context = contextRef.current;
    const { clientX, clientY, offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  }

  const finishDrawing = () => {
    var context = contextRef.current;
    context.closePath();
    setIsDrawing(false);
  };

  const clickHandler = ({ nativeEvent }) => {
    console.log(nativeEvent.offsetX, nativeEvent.clientX);
  };

  // const startDrawing = (e) => {
  //   setIsDrawing(true);
  //   Draw(e);
  // };

  // const Draw = (e) => {
  //   if (!isDrawing) {
  //     return;
  //   }
  //   const ctx = contextRef.current;
  //   ctx.lineWidth = 5;
  //   ctx.lineCap = "round";
  //   ctx.lineTo(e.clientX - e.offsetX, e.clientY - e.offsetY);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.moveTo(e.clientX - e.offsetX, e.clientY - e.offsetY);
  //new change
  // };

  // const finishDrawing = (e) => {
  //   setIsDrawing(false);
  //   const ctx = contextRef.current;
  //   ctx.beginPath();
  // };

  return (
    <div className="canvascontainer">
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onClick={clickHandler}
        onMouseMove={Draw}></canvas>
    </div>
  );
}

export default Canvas;
