/**
 * Excelpack Machines Design System
 * --------------------------------
 * Spacing Tokens
 *
 * All spacing used throughout the application
 * must come from this file.
 */

export const spacing = {
  /**
   * Base spacing scale (8-point system)
   */
  scale: {
    0: "0rem",
    1: "0.125rem", // 2px
    2: "0.25rem", // 4px
    3: "0.5rem", // 8px
    4: "0.75rem", // 12px
    5: "1rem", // 16px
    6: "1.25rem", // 20px
    7: "1.5rem", // 24px
    8: "2rem", // 32px
    9: "2.5rem", // 40px
    10: "3rem", // 48px
    11: "3.5rem", // 56px
    12: "4rem", // 64px
    13: "5rem", // 80px
    14: "6rem", // 96px
    15: "8rem", // 128px
    16: "10rem", // 160px
    17: "12rem", // 192px
  },

  /**
   * Semantic spacing
   */
  semantic: {
    none: "0rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
  },

  /**
   * Layout spacing
   */
  layout: {
    pageX: "1.5rem",
    pageY: "4rem",

    containerX: "1.5rem",

    sectionY: "6rem",

    heroY: "8rem",

    cardPadding: "1.5rem",

    formGap: "1.5rem",

    gridGap: "2rem",

    buttonX: "1.5rem",
    buttonY: "0.75rem",

    navbarHeight: "5rem",

    footerPadding: "4rem",
  },
} as const;

export type SpacingTokens = typeof spacing;
