import type { GridProps } from "./Grid.types";

const gapStyles = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function Grid({
  children,
  columns = {
    default: 1,
  },
  gap = "md",
  className = "",
}: GridProps) {
  const columnClasses = [
    columns.default ? `grid-cols-${columns.default}` : "",

    columns.sm ? `sm:grid-cols-${columns.sm}` : "",

    columns.md ? `md:grid-cols-${columns.md}` : "",

    columns.lg ? `lg:grid-cols-${columns.lg}` : "",

    columns.xl ? `xl:grid-cols-${columns.xl}` : "",

    columns["2xl"] ? `2xl:grid-cols-${columns["2xl"]}` : "",
  ];

  return (
    <div
      className={["grid", ...columnClasses, gapStyles[gap], className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
