import type { ContainerProps } from "./Container.types";

const sizeStyles = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-screen-2xl",
  "2xl": "max-w-full",
  full: "max-w-full",
};

const paddingStyles = {
  none: "",
  sm: "px-6",
  md: "px-8",
  lg: "px-12",
};

export function Container({
  children,
  size = "xl",
  padding = "md",
  as: Component = "div",
  className = "",
}: ContainerProps) {
  return (
    <Component
      className={["mx-auto w-full", sizeStyles[size], paddingStyles[padding], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
