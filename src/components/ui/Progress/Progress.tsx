import type { ProgressProps } from "./Progress.types";

export function Progress({
  value,
  max = 100,
  showLabel = false,
  className = "",
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={className} {...props}>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className="h-full rounded-full bg-primary-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {showLabel && <div className="mt-2 text-sm text-neutral-600">{Math.round(percentage)}%</div>}
    </div>
  );
}
