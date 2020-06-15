import React from "react";
import qs from "query-string";

const setQueryString = (qsValue) => {
  const nextUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;

  window.history.pushState({ path: nextUrl }, "", nextUrl);
};

const getQueryStringValue = (key, queryString = window.location.search) =>
  qs.parse(queryString)[key];

const setQueryStringValue = (
  key,
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  const nextQsValue = qs.stringify({ ...values, [key]: value });

  setQueryString(`?${nextQsValue}`);
};

export const useQueryString = (key, initialValue) => {
  const [value, setValue] = React.useState(
    getQueryStringValue(key) || initialValue
  );

  const handleSetValue = (nextValue) => {
    setValue(nextValue);
    setQueryStringValue(key, nextValue);
  };

  return [value, handleSetValue];
};
