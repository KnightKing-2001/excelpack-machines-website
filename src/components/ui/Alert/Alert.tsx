import type { AlertProps } from "./Alert.types";

const variantStyles = {
  success: "bg-green-50 text-green-800 border-green-200",

  error: "bg-red-50 text-red-800 border-red-200",

  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",

  info: "bg-blue-50 text-blue-800 border-blue-200",
};

export function Alert({ children, variant = "info", title, icon, className = "" }: AlertProps) {
  return (
    <div
      role="alert"
      className={["flex gap-3", "rounded-md", "border", "p-4", variantStyles[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && <div>{icon}</div>}

      <div>
        {title && <div className="font-semibold">{title}</div>}

        <div>{children}</div>
      </div>
    </div>
  );
}
