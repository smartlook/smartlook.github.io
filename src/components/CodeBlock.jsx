import React from "react";

import cx from "classnames";

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

  const handleSetLanguageTab = (e) => {
    setShownSnippet(e.target.getAttribute("data-language"));
  };

  const renderTabs = () => {
    if (Object.keys(snippets).length === 1) {
      return null;
    }

    return (
      <div className="component-code-tabs">
        {Object.keys(snippet).map((snippetLanguage) => {
          const classNames = cx("component-code-tabs__tab", {
            "component-code-tabs__tab--active":
              shownSnippet === snippetLanguage,
          });

          return (
            <span
              key={`code-tab-${snippetLanguage}`}
              data-language={snippetLanguage}
              className={classNames}
              onClick={handleSetLanguageTab}
            >
              {snippetLanguage}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderTabs()}
      <Code className={shownSnippet}>{snippet[shownSnippet]}</Code>
    </React.Fragment>
  );
};
