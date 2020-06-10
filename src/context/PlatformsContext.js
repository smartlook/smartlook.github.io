import React from "react";

import { PLATFORMS } from "config/constants";

const PlatformsContext = React.createContext();
const SetPlatformContext = React.createContext();

export const usePlatforms = () => {
  const context = React.useContext(PlatformsContext);

  if (context === undefined) {
    throw new Error("usePlatforms must be used within a PlatformsProvider");
  }

  return context;
};

export const useSetPlatform = () => {
  const context = React.useContext(SetPlatformContext);

  if (context === undefined) {
    throw new Error("useSetPlatform must be used within a SetPlatformProvider");
  }

  return context;
};

export const PlatformsProvider = ({ children }) => {
  const [platformsState, setPlatformsState] = React.useState({
    platforms: PLATFORMS,
    currentPlatform: PLATFORMS[0],
  });

  const setCurrentPlatform = (currentPlatform) =>
    setPlatformsState((s) => {
      return {
        ...s,
        currentPlatform,
      };
    });

  return (
    <PlatformsContext.Provider value={platformsState}>
      <SetPlatformContext.Provider value={setCurrentPlatform}>
        {children}
      </SetPlatformContext.Provider>
    </PlatformsContext.Provider>
  );
};
