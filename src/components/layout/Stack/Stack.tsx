import type { StackProps } from "./Stack.types";

const directionStyles = {
  vertical: "flex-col",

  horizontal: "flex-row",
};

const gapStyles = {
  none: "gap-0",

  xs: "gap-1",

  sm: "gap-2",

  md: "gap-4",

  lg: "gap-6",

  xl: "gap-8",
};

const alignStyles = {
  start: "items-start",

  center: "items-center",

  end: "items-end",

  stretch: "items-stretch",
};

const justifyStyles = {
  start: "justify-start",

  center: "justify-center",

  end: "justify-end",

  between: "justify-between",
};

export function Stack({
  children,

  direction = "vertical",

  gap = "md",

  align = "stretch",

  justify = "start",

  className = "",
}: StackProps) {
  return (
    <div
      className={[
        "flex",

        directionStyles[direction],

        gapStyles[gap],

        alignStyles[align],

        justifyStyles[justify],

        className,
      ]

        .filter(Boolean)

        .join(" ")}
    >
      {children}
    </div>
  );
}
