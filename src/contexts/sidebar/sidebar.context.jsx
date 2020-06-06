import React, { createContext, useState } from 'react';

export const SidebarContext = createContext({
  active: null,
  updateActive: () => {}
});

const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState(null);

  const updateActive = id => {
    setActive(id);
  };

  return (
    <SidebarContext.Provider value={{ active, updateActive }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
