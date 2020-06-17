import React from "react";

import { Code } from "gatsby-theme-docz/src/components/Code";

import { PLATFORMS } from "config/constants";
import { usePlatforms } from "hooks";

export const CodeBlock = ({ snippets, ...props }) => {
  const { currentPlatform } = usePlatforms();

  if (React.Children.count(props.children) > 0) {
    return <Code className={props.language}>{props.children}</Code>;
  }

  const snippet = snippets[currentPlatform];

  if (!snippet) {
    return (
      <div>
        it seems you misspelled the name of the platform, sorry ¯\_(ツ)_/¯
      </div>
    );
  }

  const language =
    snippet.language ??
    PLATFORMS.find((p) => p.value === currentPlatform).defaultLanguage;

  return <Code className={language}>{snippet.code}</Code>;
};
