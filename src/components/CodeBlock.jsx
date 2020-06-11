import React from "react";

import { Code } from "gatsby-theme-docz/src/components/Code";

import { usePlatforms } from "hooks";

const snippetAndroid = `
Smartlook.setGlobalEventProperties(JSONObject globalEventProperties, boolean immutable)
Smartlook.setGlobalEventProperties(Bundle globalEventProperties, boolean immutable)
Smartlook.setGlobalEventProperties(String globalEventPropertiesJsonString, boolean immutable)
Smartlook.setGlobalEventProperty(@NotNull String key, @NotNull String value, boolean immutable)
`;

const snippetIos = `
Smartlook.startRecording() // start or resume paused recording
Smartlook.stopRecording()  // pause recording
Smartlook.isRecording()    // returns true/false
`;

export const CodeBlock = () => {
  const { currentPlatform } = usePlatforms();

  return (
    <div>
      {currentPlatform === "Android" ? (
        <Code className="java">{snippetAndroid}</Code>
      ) : (
        <Code className="swift">{snippetIos}</Code>
      )}
    </div>
  );
};
