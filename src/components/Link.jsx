import React from "react";

import qs from "query-string";

import { Link as GatsbyRouterLink } from "gatsby";

import { usePlatforms, getQueryStringValue } from "hooks";

export const Link = ({ to, children, ...props }) => {
  const { currentPlatform } = usePlatforms();

  const nextUrl = to;

  return (
    <GatsbyRouterLink to={nextUrl} {...props}>
      {children}
    </GatsbyRouterLink>
  );
};
