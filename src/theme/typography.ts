/**
 * Excelpack Machines Design System
 * --------------------------------
 * Typography Tokens
 */

export const typography = {
  fontFamily: {
    heading: ["Manrope", "Inter", "system-ui", "sans-serif"].join(", "),

    body: ["Inter", "system-ui", "sans-serif"].join(", "),

    mono: ["JetBrains Mono", "Consolas", "monospace"].join(", "),
  },

  fontSize: {
    xs: "0.75rem", //12
    sm: "0.875rem", //14
    base: "1rem", //16
    lg: "1.125rem", //18
    xl: "1.25rem", //20
    "2xl": "1.5rem", //24
    "3xl": "1.875rem", //30
    "4xl": "2.25rem", //36
    "5xl": "3rem", //48
    "6xl": "3.75rem", //60
    "7xl": "4.5rem", //72
    hero: "5rem", //80
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  textStyle: {
    hero: {
      fontSize: "5rem",
      fontWeight: 800,
      lineHeight: 1.1,
    },

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },

    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },

    bodyLg: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },

    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },

    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },

    button: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    label: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
  },
} as const;

export type TypographyTokens = typeof typography;
