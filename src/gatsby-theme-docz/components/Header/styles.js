import * as mixins from "~utils/mixins";
import { media } from "~theme/breakpoints";

export const wrapper = {
  ...mixins.centerAlign,
  bg: "header.bg",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 2,
  borderBottom: (t) => `1px solid ${t.colors.border}`,
};

export const innerContainer = {
  ...mixins.centerAlign,
  flex: 1,
  px: 4,
  position: "relative",
  justifyContent: "space-between",
  height: 80,
};

export const menuIcon = {
  display: "none",
  [media.tablet]: {
    ...mixins.centerAlign,
    paddingLeft: 32,
  },
};
