import React from "react";

import { globalHistory } from "@reach/router";

import { PLATFORMS, DEFAULT_PLATFORM } from "config/constants";

import { useQueryString, getQueryStringValue } from "hooks";

export const PlatformsContext = React.createContext();

export const PlatformsProvider = ({ children }) => {
  const [state, dispatch] = React.useState({
    platforms: PLATFORMS.map((p) => p.value),
    currentPlatform: DEFAULT_PLATFORM,
  });

  const { qs } = useQueryString("platform");

  React.useEffect(() => {
    if (handleCheckPlatforms(qs)) {
      handleSetPlatform(qs);
    }

    const removeListener = globalHistory.listen((params) => {
      const {
        location: { search },
      } = params;

      handleSetPlatform(getQueryStringValue("platform", search));
    });

    return () => {
      removeListener();
    };
  }, []);

  const handleCheckPlatforms = (platform) => {
    return (
      state.platforms.includes(platform) && state.currentPlatform !== platform
    );
  };

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
