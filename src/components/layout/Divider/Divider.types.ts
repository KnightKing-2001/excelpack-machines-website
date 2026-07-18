export type DividerOrientation = "horizontal" | "vertical";

export type DividerVariant = "default" | "strong" | "subtle";

export interface DividerProps {
  orientation?: DividerOrientation;

  variant?: DividerVariant;

  className?: string;
}
