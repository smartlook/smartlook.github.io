import React from "react";
import MDX from "@mdx-js/runtime";

import { CodeBlock } from "./CodeBlock";

import { useComponents } from "docz";

const appComponents = {
  CodeBlock: (props) => <CodeBlock {...props} />,
};

export const MD = ({ markup }) => {
  const components = useComponents();

  const mdxComponents = {
    ...appComponents,
    ...components,
  };

  return <MDX components={mdxComponents}>{markup}</MDX>;
};
