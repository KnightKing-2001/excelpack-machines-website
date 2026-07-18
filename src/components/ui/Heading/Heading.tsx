import type { ElementType } from "react";
import type { HeadingProps } from "./Heading.types";

const sizeStyles = {
  hero: "text-6xl",
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
};

const weightStyles = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Heading({
  children,
  level = 2,
  size = "h2",
  align = "left",
  weight = "semibold",
  as,
  className = "",
}: HeadingProps) {
  const Component: ElementType = as ?? (`h${level}` as ElementType);

  return (
    <Component
      className={[sizeStyles[size], weightStyles[weight], alignStyles[align], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
