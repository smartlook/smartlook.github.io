import React from "react";
import MDX from "@mdx-js/runtime";
import cx from "classnames";

import { useComponents } from "docz";
import { usePlatforms } from "hooks";

import { Code } from "./Code";
import { CodeBlock } from "./CodeBlock";
import { Link } from "./Link";

import "./Alert.css";

const getMatch = (items, matchTo) =>
  items
    .split(",")
    .map((i) => i.trim())
    .includes(matchTo);

export const TextBlock = ({ visibleOn, invisibleOn, kind, children }) => {
  const { currentPlatform } = usePlatforms();
  const themeComponents = useComponents();

  let isMatch = true;

  if (visibleOn !== undefined) {
    isMatch = getMatch(visibleOn, currentPlatform);
  }

  if (invisibleOn !== undefined) {
    isMatch = !getMatch(invisibleOn, currentPlatform);
  }

  if (!isMatch) {
    return null;
  }

  const classnames = kind
    ? cx("component-alert", {
        [`component-alert--${kind}`]: true,
      })
    : undefined;

  const components = {
    ...themeComponents,
    Link,
    Code,
    CodeBlock,
  };

  return (
    <div className={classnames}>
      <MDX components={components}>{children}</MDX>
    </div>
  );
};
