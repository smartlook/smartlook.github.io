import React from "react";

import cx from "classnames";

import { Code as PrismRenderer } from "gatsby-theme-docz/src/components/Code";

export const Code = ({ snippets }) => {
  const [languageTab, setLanguageTab] = React.useState(
    Object.keys(snippets)[0]
  );

  const handleSetLanguageTab = (e) => {
    setLanguageTab(e.target.getAttribute("data-language"));
  };

  const renderTabs = () => {
    if (Object.keys(snippets).length === 1) {
      return null;
    }

    return (
      <div className="component-code-tabs">
        {Object.keys(snippets).map((snippetLanguage) => {
          const classNames = cx("component-code-tabs__tab", {
            "component-code-tabs__tab--active": languageTab === snippetLanguage,
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
      <PrismRenderer className={languageTab}>
        {snippets[languageTab]}
      </PrismRenderer>
    </React.Fragment>
  );
};
