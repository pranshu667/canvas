import React from "react";
import "./Colors.css";
import TabManager from "../hoc/TabManager";

function Colors() {
  return (
    <div className="colors">
      <TabManager
        tabIndex={1}
        style1={{ border: "0px" }}
        style2={{ border: "2px solid #F6A08C" }}>
        <div id="red"></div>
        <div id="yellow"></div>
        <div id="green"></div>
      </TabManager>
    </div>
  );
}

export default Colors;
