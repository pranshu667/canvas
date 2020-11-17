import React from "react";
import Download from "@material-ui/icons/GetApp";
import Refresh from "@material-ui/icons/Refresh";
import TabManager from "../hoc/TabManager";
import DrawingTools from "../DrawingTools/DrawingTools";
import Colors from "../Colors/Colors";
import "./Navbar.css";
import Pencil from "@material-ui/icons/Create";
import Eraser from "@material-ui/icons/Label";

function Navbar() {
  return (
    <div className="navbar">
      <DrawingTools />
      <Colors />
    </div>
  );
}

export default Navbar;
