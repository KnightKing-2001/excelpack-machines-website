/**
 * Excelpack Machines Design System
 * --------------------------------
 * Z-Index Tokens
 */

export const zIndex = {
  hide: -1,

  base: 0,

  content: 10,

  sticky: 100,

  header: 200,

  dropdown: 300,

  overlay: 400,

  drawer: 500,

  modal: 600,

  popover: 700,

  tooltip: 800,

  toast: 900,

  loader: 1000,
} as const;

export type ZIndexTokens = typeof zIndex;
