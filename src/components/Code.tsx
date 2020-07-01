import React from "react";

import { Code as PrismRenderer } from "gatsby-theme-docz/src/components/Code";

export const Code = ({ language, children }) => {
  return <PrismRenderer className={language}>{children}</PrismRenderer>;
};
