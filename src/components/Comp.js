import React from "react";

function Comp(props) {
  return <div style={{ color: "red" }}>{props.children}</div>;
}

export default Comp;
