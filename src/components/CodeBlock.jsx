import React from "react";

import { Code } from "gatsby-theme-docz/src/components/Code";

import { PLATFORMS } from "config/constants";
import { usePlatforms } from "hooks";

import "./Code.css";

export const CodeBlock = ({ snippets }) => {
  const { currentPlatform } = usePlatforms();

  const snippet = snippets[currentPlatform];

  const findSnippet = () => {
    const platformDefaultLanguage = PLATFORMS.find(
      (platform) => platform.value === currentPlatform
    ).defaultLanguage;

    if (!snippet) {
      return platformDefaultLanguage;
    }

    const snippetLanguages = Object.keys(snippets[currentPlatform]);

    if (!snippetLanguages.includes(platformDefaultLanguage)) {
      return snippetLanguages[0];
    }

    return platformDefaultLanguage;
  };

  const [shownSnippet, setShownSnippet] = React.useState();

  React.useEffect(() => {
    setShownSnippet(findSnippet());
  }, [currentPlatform]);

  if (
    typeof snippet === "undefined" ||
    typeof snippet[shownSnippet] === "undefined"
  ) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="codeblock-tabs">
        {Object.keys(snippet).map((lang, index) => {
          return (
            <span
              key={`tab-${lang}`}
              className={`codeblock-tab ${
                lang === shownSnippet ? "codeblock-tab--active" : ""
              }`}
              onClick={() => setShownSnippet(lang)}
            >
              {lang}
            </span>
          );
        })}
      </div>
      <Code className={shownSnippet}>{snippet[shownSnippet]}</Code>
    </React.Fragment>
  );
};
