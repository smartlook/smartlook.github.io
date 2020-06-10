import React from "react";

import { usePlatforms } from "context/PlatformsContext";

export const CodeBlock = () => {
  const { currentPlatform } = usePlatforms();

  return (
    <div>
      {currentPlatform === "Android" ? (
        <p>current platform is Android</p>
      ) : (
        <p>current platform is iOS</p>
      )}
    </div>
  );
};
