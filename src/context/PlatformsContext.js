import React from "react";

import { PLATFORMS, DEFAULT_PLATFORM } from "config/constants";

import { useQueryString } from "hooks";

export const PlatformsContext = React.createContext();

export const PlatformsProvider = ({ children }) => {
  const [state, dispatch] = React.useState({
    platforms: PLATFORMS.map((p) => p.value),
    currentPlatform: DEFAULT_PLATFORM,
  });

  const [qs] = useQueryString("platform");

  React.useEffect(() => {
    if (state.platforms.includes(qs) && state.currentPlatform !== qs) {
      handleSetPlatform(qs);
    }
  }, []);

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
