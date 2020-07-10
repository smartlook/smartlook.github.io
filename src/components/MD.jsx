import React from "react";
import MDX from "@mdx-js/runtime";

import { useComponents } from "docz";
import { usePlatforms } from "hooks";

import { CodeBlock } from "./CodeBlock";

export const MD = ({ markup, visibleOn, invisibleOn }) => {
  const { currentPlatform } = usePlatforms();
  const components = useComponents();

  let isMatch = false;

  if (visibleOn !== undefined) {
    isMatch = visibleOn.split(",").includes(currentPlatform);
  }

  if (invisibleOn !== undefined) {
    isMatch = !invisibleOn.split(",").includes(currentPlatform);
  }

  if (!isMatch) {
    return null;
  }

  return <MDX components={components}>{markup}</MDX>;
};
