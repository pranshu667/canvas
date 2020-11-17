import React from "react";
import "./styles/ActionButtonManager.css";

function ActionButtonManager(props) {
  const { buttons, activeButton, setActiveButton } = props;

  const style1 = { backgroundColor: "#F9A28E", color: "black" };
  const style2 = { backgroundColor: "#2C2C31", color: "#F9A28E" };

  return (
    <div className="action-button-manager">
      {buttons.map(({ Element, value }) =>
        value === activeButton ? (
          <Element key={value} className="action-buttons" style={style1} />
        ) : (
          <Element
            key={value}
            className="action-buttons"
            style={style2}
            onClick={() => {
              setActiveButton(value);
            }}
          />
        )
      )}
    </div>
  );
}

export default ActionButtonManager;
