import React from "react";

import { usePlatforms } from "hooks";

export const TextBlock = ({ visibleOn, className, children }) => {
  const { currentPlatform } = usePlatforms();

  const visible = visibleOn.split(",");

  const isMatch = visible.includes(currentPlatform);

  if (!isMatch) {
    return null;
  }

  if (typeof children === "function") {
    return <div className={className}>{children(currentPlatform)}</div>;
  }

  return <div className={className}>{children}</div>;
};
