import React from "react";
import DownloadSvgIcon from "../assets/download.png";
import AddTaskSvgIcon from "@material-ui/icons/GetApp";

function DownloadIcon() {
  return (
    <div className="circular-wrapper">
      <AddTaskSvgIcon style={{ backgroundColor: "red" }} />
      <DownloadSvgIcon />
    </div>
  );
}

export default DownloadIcon;
