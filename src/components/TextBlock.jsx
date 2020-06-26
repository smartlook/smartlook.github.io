import React from "react";

import { usePlatforms } from "hooks";

export const TextBlock = ({ visibleOn, invisibleOn, children }) => {
  const { currentPlatform } = usePlatforms();

  var isMatch = false;

  if (visibleOn != null) {
    isMatch = visibleOn.split(",").includes(currentPlatform);
  }

  if (invisibleOn != null) {
    isMatch = !invisibleOn.split(",").includes(currentPlatform);
  }

  if (!isMatch) {
    return null;
  }

  return <span>{children(currentPlatform)}</span>;
};
