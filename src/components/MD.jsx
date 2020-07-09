import React from "react";
import MDX from "@mdx-js/runtime";

import { CodeBlock } from "./CodeBlock";

import { useComponents } from "docz";
import { usePlatforms } from "hooks";

const appComponents = {
  CodeBlock: (props) => <CodeBlock {...props} />,
};

export const MD = ({ markup, visibleOn, invisibleOn }) => {
  const currentPlatform = usePlatforms();
  const components = useComponents();

  // let isMatch = false;

  // if (visibleOn !== undefined) {
  //   isMatch = visibleOn.split(",").includes(currentPlatform);
  // }

  // if (invisibleOn !== undefined) {
  //   isMatch = !invisibleOn.split(",").includes(currentPlatform);
  // }

  // if (!isMatch) {
  //   return null;
  // }

  const mdxComponents = {
    ...appComponents,
    ...components,
  };

  return <MDX components={mdxComponents}>{markup}</MDX>;
};
