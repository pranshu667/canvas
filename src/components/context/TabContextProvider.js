import React, { createContext, useState } from "react";
export const TabContext = createContext({});

function TabContextProvider({ children }) {
  const [activeTabs, setActiveTabs] = useState([0, 0]);
  return (
    <TabContext.Provider value={{ activeTabs, setActiveTabs }}>
      {children}
    </TabContext.Provider>
  );
}

export default TabContextProvider;
