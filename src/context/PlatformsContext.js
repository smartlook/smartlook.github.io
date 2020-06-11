import React from "react";

import { PLATFORMS, DEFAULT_PLATFORM } from "config/constants";

export const PlatformsContext = React.createContext();

export const PlatformsProvider = ({ children }) => {
  const [state, dispatch] = React.useState({
    platforms: PLATFORMS,
    currentPlatform: DEFAULT_PLATFORM,
  });

  const handleSetPlatform = (currentPlatform) => {
    dispatch((prevState) => {
      return {
        ...prevState,
        currentPlatform,
      };
    });
  };

  const contextValue = {
    platforms: state.platforms,
    currentPlatform: state.currentPlatform,
    handleSetPlatform,
  };

  return (
    <PlatformsContext.Provider value={contextValue}>
      {children}
    </PlatformsContext.Provider>
  );
};
