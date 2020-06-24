import React from "react";

import { Code } from "gatsby-theme-docz/src/components/Code";

import { PLATFORMS } from "config/constants";
import { usePlatforms } from "hooks";

import "./CodeBlock.css";

export const CodeBlock = ({ snippets }) => {
  const { currentPlatform } = usePlatforms();

  const snippet = snippets[currentPlatform];

  const findDefaultLanguage = () =>
    PLATFORMS.find((p) => p.value === currentPlatform).defaultLanguage;

  const [currentTab, setCurrentTab] = React.useState();

  React.useEffect(() => {
    setCurrentTab(findDefaultLanguage());
  }, [currentPlatform]);

  if (
    typeof snippet === "undefined" ||
    typeof snippet[currentTab] === "undefined"
  ) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="codeblock-tabs">
        {Object.keys(snippet).map((s, index) => {
          return (
            <span
              key={`tab-${s}`}
              className={`codeblock-tab ${
                s === currentTab ? "codeblock-tab-active" : ""
              }`}
              onClick={() => setCurrentTab(s)}
            >
              {s}
            </span>
          );
        })}
      </div>
      <Code className={currentTab}>{snippet[currentTab]}</Code>
    </React.Fragment>
  );
};
