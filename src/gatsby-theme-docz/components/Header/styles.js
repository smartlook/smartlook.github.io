import * as mixins from "~utils/mixins";

export const wrapper = {
  bg: "header.bg",
  position: "relative",
  zIndex: 1,
  borderBottom: (t) => `1px solid ${t.colors.border}`,
};

export const innerContainer = {
  ...mixins.centerAlign,
  px: 4,
  position: "relative",
  justifyContent: "space-between",
  height: 80,
};
