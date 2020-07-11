import React from "react";
import cx from "classnames";

import { TextBlock } from "./TextBlock";

import "./Alert.css";

export const Alert = ({ kind = "note", visibleOn, invisibleOn, children }) => {
  const classnames = cx("component-alert", {
    [`component-alert--${kind}`]: true,
  });

  return (
    <TextBlock
      className={classnames}
      visibleOn={visibleOn}
      invisibleOn={invisibleOn}
    >
      {children}
    </TextBlock>
  );
};
