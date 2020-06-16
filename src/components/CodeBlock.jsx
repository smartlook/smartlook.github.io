import React from "react";

import { Code } from "gatsby-theme-docz/src/components/Code";

import { usePlatforms } from "hooks";

export const CodeBlock = ({ snippets }) => {
  const { platforms, currentPlatform } = usePlatforms();

  return (
    <Code className={snippets[currentPlatform].language}>
      {snippets[currentPlatform].code}
    </Code>
  );
};
