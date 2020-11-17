import React, { useState, Children, cloneElement } from "react";
import "./TabManager.css";

function TabManager(props) {
  const [activeButton, setActiveButton] = useState(0);

  const buttons = Children.map(props.children, (child, index) => {
    {
      return index === activeButton
        ? cloneElement(child, { className: "altstyles" })
        : cloneElement(child, { className: "normalstyles" });
    }
  });

  return <div style={{ color: "red" }}>{buttons}</div>;
}

export default TabManager;
