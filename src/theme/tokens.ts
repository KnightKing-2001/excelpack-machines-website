import { animations } from "./animations";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { zIndex } from "./zIndex";

export const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  animations,
  zIndex,
} as const;

export type Theme = typeof theme;
