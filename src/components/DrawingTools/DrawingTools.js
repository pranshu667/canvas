import React from "react";
import Pencil from "@material-ui/icons/Create";
import Eraser from "@material-ui/icons/Label";
import "./DrawingTools.css";
import TabManager from "../hoc/TabManager";
function DrawingTools() {
  return (
    <div className="drawing-tools">
      <TabManager
        tabIndex={0}
        style1={{ color: "#F9A28E", backgroundColor: "#2C2C31" }}
        style2={{ color: "black", backgroundColor: "#F9A28E" }}>
        <Pencil />
        <Eraser />
      </TabManager>
    </div>
  );
}

export default DrawingTools;
