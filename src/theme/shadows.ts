/**
 * Excelpack Machines Design System
 * --------------------------------
 * Shadow Tokens
 */

export const shadows = {
  scale: {
    none: "none",

    xs: "0 1px 2px rgba(15, 23, 42, 0.05)",

    sm: "0 2px 4px rgba(15, 23, 42, 0.06)",

    md: "0 4px 8px rgba(15, 23, 42, 0.08)",

    lg: "0 8px 16px rgba(15, 23, 42, 0.10)",

    xl: "0 16px 32px rgba(15, 23, 42, 0.12)",

    "2xl": "0 24px 48px rgba(15, 23, 42, 0.14)",

    inner: "inset 0 2px 4px rgba(15,23,42,0.06)",

    focus: "0 0 0 3px rgba(0,91,172,0.25)",
  },

  component: {
    button: "0 2px 4px rgba(15,23,42,0.06)",

    buttonHover: "0 4px 8px rgba(15,23,42,0.10)",

    card: "0 2px 8px rgba(15,23,42,0.06)",

    cardHover: "0 12px 24px rgba(15,23,42,0.12)",

    dropdown: "0 12px 24px rgba(15,23,42,0.10)",

    modal: "0 24px 48px rgba(15,23,42,0.18)",

    navbar: "0 2px 10px rgba(15,23,42,0.06)",

    tooltip: "0 8px 16px rgba(15,23,42,0.14)",

    floating: "0 16px 32px rgba(15,23,42,0.16)",
  },
} as const;

export type ShadowTokens = typeof shadows;
