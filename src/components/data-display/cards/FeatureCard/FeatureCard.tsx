import type { FeatureCardProps } from "./FeatureCard.types";

export function FeatureCard({
  title,
  description,
  icon,
  className = "",
  onClick,
}: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        "group",
        "rounded-lg",
        "border",
        "border-neutral-200",
        "bg-white",
        "p-6",
        "shadow-sm",
        "transition-all",
        "duration-200",
        "hover:shadow-md",
        "hover:border-primary-600",
        "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Icon */}
      {icon && <div className="mb-4 text-primary-600">{icon}</div>}

      {/* Title */}
      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}
