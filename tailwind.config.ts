import type { Config } from "tailwindcss";

import { animations } from "./src/theme/animations";
import { breakpoints } from "./src/theme/breakpoints";
import { colors } from "./src/theme/colors";
import { radius } from "./src/theme/radius";
import { shadows } from "./src/theme/shadows";
import { spacing } from "./src/theme/spacing";
import { typography } from "./src/theme/typography";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: colors.primary,

        secondary: colors.secondary,

        accent: colors.accent,

        success: colors.success,

        warning: colors.warning,

        error: colors.error,

        info: colors.info,

        neutral: colors.neutral,
      },

      fontFamily: {
        heading: typography.fontFamily.heading.split(", "),

        body: typography.fontFamily.body.split(", "),

        mono: typography.fontFamily.mono.split(", "),
      },

      fontSize: {
        hero: [
          typography.fontSize.hero,
          {
            lineHeight: typography.textStyle.hero.lineHeight,
          },
        ],

        h1: [
          typography.textStyle.h1.fontSize,
          {
            lineHeight: typography.textStyle.h1.lineHeight,
          },
        ],

        h2: [
          typography.textStyle.h2.fontSize,
          {
            lineHeight: typography.textStyle.h2.lineHeight,
          },
        ],

        h3: [
          typography.textStyle.h3.fontSize,
          {
            lineHeight: typography.textStyle.h3.lineHeight,
          },
        ],

        h4: [
          typography.textStyle.h4.fontSize,
          {
            lineHeight: typography.textStyle.h4.lineHeight,
          },
        ],

        body: [
          typography.textStyle.body.fontSize,
          {
            lineHeight: typography.textStyle.body.lineHeight,
          },
        ],
      },

      spacing: {
        ...spacing.scale,
      },

      borderRadius: {
        ...radius,
      },

      boxShadow: {
        ...shadows.scale,
      },

      screens: {
        sm: `${breakpoints.values.sm}px`,

        md: `${breakpoints.values.md}px`,

        lg: `${breakpoints.values.lg}px`,

        xl: `${breakpoints.values.xl}px`,

        "2xl": `${breakpoints.values["2xl"]}px`,
      },

      transitionDuration: {
        fast: animations.duration.fast,

        normal: animations.duration.normal,

        slow: animations.duration.slow,
      },

      transitionTimingFunction: {
        standard: animations.easing.standard,

        emphasized: animations.easing.emphasized,
      },
    },
  },

  plugins: [],
};

export default config;
