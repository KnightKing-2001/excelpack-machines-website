/**
 * Excelpack Machines Design System
 * --------------------------------
 * Animation Tokens
 */

export const animations = {
  duration: {
    instant: "0ms",
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
    slower: "500ms",
  },

  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",

    standard: "cubic-bezier(0.4, 0, 0.2, 1)",

    emphasized: "cubic-bezier(0.2, 0, 0, 1)",
  },

  transition: {
    button: "150ms cubic-bezier(0.4,0,0.2,1)",

    card: "250ms cubic-bezier(0.4,0,0.2,1)",

    modal: "300ms cubic-bezier(0.2,0,0,1)",

    drawer: "350ms cubic-bezier(0.2,0,0,1)",

    tooltip: "150ms ease-out",

    page: "350ms cubic-bezier(0.4,0,0.2,1)",
  },

  scale: {
    hover: 1.02,
    active: 0.98,
  },
} as const;

export type AnimationTokens = typeof animations;
