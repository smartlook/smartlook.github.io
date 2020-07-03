import React from "react";

import { usePlatforms } from "hooks";

export const TextBlock = ({ visibleOn, invisibleOn, className, children }) => {
  const { currentPlatform } = usePlatforms();

  let isMatch = false;

  if (visibleOn !== undefined) {
    isMatch = visibleOn.split(",").includes(currentPlatform);
  }

  if (invisibleOn !== undefined) {
    isMatch = !invisibleOn.split(",").includes(currentPlatform);
  }

  if (!isMatch) {
    return null;
  }

  if (typeof children === "function") {
    return <span className={className}>{children(currentPlatform)}</span>;
  }

  return <span className={className}>{children}</span>;
};
