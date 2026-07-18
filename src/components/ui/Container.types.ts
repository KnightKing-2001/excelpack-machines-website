import type { ElementType, ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export type ContainerPadding = "none" | "sm" | "md" | "lg";

export interface ContainerProps {
  children: ReactNode;

  size?: ContainerSize;

  padding?: ContainerPadding;

  as?: ElementType;

  className?: string;
}
