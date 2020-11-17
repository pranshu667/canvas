import React, { useState } from "react";
import "./styles/Navbar.css";

import DownloadIcon from "@material-ui/icons/GetApp";
import PencilIcon from "@material-ui/icons/Create";
import RefreshIcon from "@material-ui/icons/Refresh";
import ActionButtonManager from "./ActionButtonManager";
import Colors from "./Colors";
import TabManager from "./TabManager";

function Navbar() {
  const buttons = [
    { Element: DownloadIcon, value: 1 },
    { Element: PencilIcon, value: 2 },
    { Element: RefreshIcon, value: 3 },
  ];

  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="navbar">
      <ActionButtonManager
        buttons={buttons}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Colors />
    </div>
  );
}

export default Navbar;
