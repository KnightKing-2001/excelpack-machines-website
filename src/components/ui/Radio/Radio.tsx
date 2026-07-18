import type { RadioProps } from "./Radio.types";

const stateStyles = {
  default: "border-neutral-300 text-primary-600 focus:ring-primary-600",

  success: "border-green-500 text-green-600 focus:ring-green-600",

  error: "border-red-500 text-red-600 focus:ring-red-600",
};

export function Radio({
  label,

  description,

  errorMessage,

  successMessage,

  state = "default",

  required,

  id,

  className = "",

  ...props
}: RadioProps) {
  const radioId = id ?? `radio-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          id={radioId}

          type="radio"

          aria-invalid={state === "error"}

          aria-describedby={message || description ? `${radioId}-description` : undefined}

          className={[
            "mt-1",

            "h-4",

            "w-4",

            "border",

            "focus:ring-2",

            "focus:ring-offset-1",

            "disabled:cursor-not-allowed",

            "disabled:bg-neutral-100",

            stateStyles[state],

            className,
          ]

            .filter(Boolean)

            .join(" ")}

          {...props}
        />

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={radioId}

                className="
                  text-sm
                  font-medium
                  text-neutral-800
                "
              >
                {label}

                {required && <span className="text-red-600"> *</span>}
              </label>
            )}

            {description && (
              <p
                id={`${radioId}-description`}

                className="
                  text-xs
                  text-neutral-500
                "
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {message && (
        <p
          className={[
            "text-xs",

            state === "error" ? "text-red-600" : "",

            state === "success" ? "text-green-600" : "",
          ]

            .filter(Boolean)

            .join(" ")}
        >
          {message}
        </p>
      )}
    </div>
  );
}
