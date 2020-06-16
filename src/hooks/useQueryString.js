import React from "react";
import { navigate } from "@reach/router";
import queryString from "query-string";

export const getQueryStringValue = (key, url = window.location.search) =>
  queryString.parse(url)[key];

export const setQueryStringValue = (
  key,
  value,
  url = window.location.search
) => {
  const values = queryString.parse(url);
  const nextQsValue = queryString.stringify({ ...values, [key]: value });

  const { pathname, hash } = window.location;

  navigate(pathname + `?${nextQsValue}` + hash);
};

export const useQueryString = (key, initialValue) => {
  const [qs, setQs] = React.useState(getQueryStringValue(key) || initialValue);

  const handleSetQs = (nextValue) => {
    setQs(nextValue);
    setQueryStringValue(key, nextValue);
  };

  return { qs, handleSetQs };
};
