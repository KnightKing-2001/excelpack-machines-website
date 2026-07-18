import type { ElementType, ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingSize = "hero" | "h1" | "h2" | "h3" | "h4";

export type HeadingAlign = "left" | "center" | "right";

export type HeadingWeight = "regular" | "medium" | "semibold" | "bold";

export interface HeadingProps {
  children: ReactNode;

  level?: HeadingLevel;

  size?: HeadingSize;

  align?: HeadingAlign;

  weight?: HeadingWeight;

  as?: ElementType;

  className?: string;
}
