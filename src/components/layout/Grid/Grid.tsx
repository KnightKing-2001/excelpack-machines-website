import type { GridProps } from "./Grid.types";

const columnStyles = {
  1: "grid-cols-1",

  2: "grid-cols-1 md:grid-cols-2",

  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",

  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",

  5: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",

  6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
};

const gapStyles = {
  none: "gap-0",

  sm: "gap-3",

  md: "gap-6",

  lg: "gap-8",

  xl: "gap-12",
};

export function Grid({
  children,

  columns = 3,

  gap = "md",

  className = "",
}: GridProps) {
  return (
    <div
      className={["grid", columnStyles[columns], gapStyles[gap], className]

        .filter(Boolean)

        .join(" ")}
    >
      {children}
    </div>
  );
}
