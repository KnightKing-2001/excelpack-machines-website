/**
 * Excelpack Machines Design System
 * --------------------------------
 * Border Radius Tokens
 */

export const radius = {
  /**
   * Base radius scale
   */
  scale: {
    none: "0",
    xs: "0.125rem", // 2px
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.25rem", // 20px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  /**
   * Component radius
   */
  component: {
    button: "0.5rem",
    input: "0.5rem",
    textarea: "0.5rem",
    select: "0.5rem",

    card: "1rem",

    image: "1rem",

    modal: "1.25rem",

    badge: "9999px",

    avatar: "9999px",

    tooltip: "0.5rem",
  },
} as const;

export type RadiusTokens = typeof radius;
