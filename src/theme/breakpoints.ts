/**
 * Excelpack Machines Design System
 * --------------------------------
 * Responsive Breakpoint Tokens
 */

export const breakpoints = {
  /**
   * Mobile First Breakpoints
   */
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },

  /**
   * CSS Media Queries
   */
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },

  /**
   * Maximum Content Widths
   */
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },
} as const;

export type BreakpointTokens = typeof breakpoints;
