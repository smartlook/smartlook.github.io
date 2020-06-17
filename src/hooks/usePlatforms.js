import React from "react";

import { PlatformsContext } from "context";

export const usePlatforms = () => {
  const context = React.useContext(PlatformsContext);

  if (context === undefined) {
    throw new Error("usePlatforms must be used within a PlatformsProvider");
  }

  return context;
};
