import React, { Children, cloneElement, useContext } from "react";
import "./TabManager.css";
import { DrawingToolContext } from "../context/DrawingToolContextProvider";
import { TabContext } from "../context/TabContextProvider";

function TabManager(props) {
  const { activeTabs, setActiveTabs } = useContext(TabContext);
  console.log(activeTabs);

  const clickHandler = (index, value) => {
    let newActiveTabs = [...activeTabs];
    newActiveTabs[index] = value;
    setActiveTabs(newActiveTabs);
  };
  const buttons = Children.map(props.children, (child, index) => {
    return index === activeTabs[props.tabIndex] ? (
      <>
        {cloneElement(child, {
          style: { ...props.style2 },
          onClick: () => {
            clickHandler(props.tabIndex, index);
          },
        })}
      </>
    ) : (
      <>
        {cloneElement(child, {
          style: { ...props.style1 },
          onClick: () => {
            clickHandler(props.tabIndex, index);
          },
        })}
      </>
    );
  });

  return <>{buttons}</>;
}

export default TabManager;
