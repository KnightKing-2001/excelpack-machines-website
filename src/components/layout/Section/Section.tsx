import type { SectionProps } from "./Section.types";

const spacingStyles = {
  none: "",

  sm: "py-6",

  md: "py-12",

  lg: "py-16",

  xl: "py-24",
};

const backgroundStyles = {
  default: "bg-white",

  muted: "bg-neutral-50",

  dark: "bg-neutral-950 text-white",

  primary: "bg-primary-600 text-white",
};

export function Section({
  children,

  spacing = "lg",

  background = "default",

  className = "",

  id,
}: SectionProps) {
  return (
    <section
      id={id}

      className={[spacingStyles[spacing], backgroundStyles[background], className]

        .filter(Boolean)

        .join(" ")}
    >
      {children}
    </section>
  );
}
