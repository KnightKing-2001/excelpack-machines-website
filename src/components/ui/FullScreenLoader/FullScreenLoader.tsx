import { Spinner } from "../Spinner";
import type { FullScreenLoaderProps } from "./FullScreenLoader.types";

export function FullScreenLoader({
  label = "Loading...",
  className = "",
  ...props
}: FullScreenLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        "fixed inset-0",
        "z-loader",
        "flex items-center justify-center",
        "bg-white/80",
        "backdrop-blur-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" variant="primary" label={label} />

        <p className="text-sm font-medium text-neutral-700">{label}</p>
      </div>
    </div>
  );
}
