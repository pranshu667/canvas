import React, { createContext, useState, useEffect } from "react";
export const DrawingToolContext = createContext({});

function DrawingToolContextProvider({ children }) {
  const [drawingState, setDrawingState] = useState([0, 0]);

  return (
    <DrawingToolContext.Provider value={{ drawingState, setDrawingState }}>
      {children}
    </DrawingToolContext.Provider>
  );
}

export default DrawingToolContextProvider;
