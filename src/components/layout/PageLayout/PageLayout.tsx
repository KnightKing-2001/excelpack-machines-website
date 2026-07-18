import type { PageLayoutProps } from "./PageLayout.types";

export function PageLayout({
  children,

  header,

  footer,

  className = "",
}: PageLayoutProps) {
  return (
    <div
      className={["flex", "min-h-screen", "flex-col", "bg-white", className]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}

      {header && <header>{header}</header>}

      {/* Main Content */}

      <main
        className="
          flex-1
        "
      >
        {children}
      </main>

      {/* Footer */}

      {footer && <footer>{footer}</footer>}
    </div>
  );
}
