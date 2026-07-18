import type { HTMLAttributes } from "react";

export type SkeletonVariant = "text" | "rectangular" | "circular";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
}
