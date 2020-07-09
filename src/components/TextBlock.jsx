import React from "react";

import { usePlatforms } from "hooks";

export const TextBlock = ({ visibleOn, invisibleOn, className, children }) => {
  const { currentPlatform } = usePlatforms();

  const showOn = (platform, text) => {
    return platform === currentPlatform ? text : "";
  };

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
    return <p className={className}>{children(showOn)}</p>;
  }

  return <p className={className}>{children}</p>;
};
