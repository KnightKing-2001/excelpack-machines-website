import type { GridProps } from "./Grid.types";

const columnStyles = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapStyles = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

function getResponsiveColumns(columns: GridProps["columns"]) {
  if (typeof columns === "number") {
    return columnStyles[columns];
  }

  if (!columns) {
    return columnStyles[1];
  }

  return [
    columns.mobile ? columnStyles[columns.mobile] : "grid-cols-1",

    columns.tablet ? `md:${columnStyles[columns.tablet]}` : "",

    columns.desktop ? `lg:${columnStyles[columns.desktop]}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Grid({
  children,
  columns = 1,
  gap = "md",
  as: Component = "div",
  className = "",
}: GridProps) {
  return (
    <Component
      className={["grid", getResponsiveColumns(columns), gapStyles[gap], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
