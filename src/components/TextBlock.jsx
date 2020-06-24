import React from "react";

import { usePlatforms } from "hooks";

export const TextBlock = ({ visibleOn, children }) => {
  const { currentPlatform } = usePlatforms();

  const visible = visibleOn.split(",");

  const isMatch = visible.includes(currentPlatform);

  if (!isMatch) {
    return null;
  }

  return <div>{children(currentPlatform)}</div>;
};
