import React from "react";

import { PlatformsProvider } from "context";

export const wrapRootElement = ({ element }) => {
  return <PlatformsProvider>{element}</PlatformsProvider>;
};
