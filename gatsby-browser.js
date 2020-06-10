import React from "react";

import { PlatformsProvider } from "context/PlatformsContext";

export const wrapPageElement = ({ element }) => {
  return <PlatformsProvider>{element}</PlatformsProvider>;
};
