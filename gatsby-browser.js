import React from "react";

import { PlatformsProvider } from "context";

export const wrapPageElement = ({ element }) => {
  return <PlatformsProvider>{element}</PlatformsProvider>;
};
