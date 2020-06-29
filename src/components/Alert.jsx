import React from "react";
import cx from "classnames";

import "./Alert.css";

export const Alert = ({ kind = "info", children }) => {
  const classnames = cx("component-alert", {
    [`component-alert--${kind}`]: true,
  });

  return <div className={classnames}>{children}</div>;
};
