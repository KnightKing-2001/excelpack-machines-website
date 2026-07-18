import type { ToggleProps } from "./Toggle.types";

const stateStyles = {
  default: "peer-focus:ring-primary-600",

  success: "peer-focus:ring-green-600",

  error: "peer-focus:ring-red-600",
};

export function Toggle({
  label,

  description,

  errorMessage,

  successMessage,

  state = "default",

  required,

  id,

  className = "",

  ...props
}: ToggleProps) {
  const toggleId = id ?? `toggle-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <label
          htmlFor={toggleId}

          className="
            relative
            inline-flex
            cursor-pointer
            items-center
          "
        >
          <input
            id={toggleId}

            type="checkbox"

            role="switch"

            aria-checked={props.checked}

            aria-invalid={state === "error"}

            className="
              peer
              sr-only
            "

            {...props}
          />

          <span
            className={[
              "h-6",

              "w-11",

              "rounded-full",

              "bg-neutral-300",

              "transition",

              "peer-checked:bg-primary-600",

              "peer-focus:outline-none",

              "peer-focus:ring-2",

              "peer-focus:ring-offset-2",

              stateStyles[state],

              "after:absolute",

              "after:left-[2px]",

              "after:top-[2px]",

              "after:h-5",

              "after:w-5",

              "after:rounded-full",

              "after:bg-white",

              "after:transition-transform",

              "peer-checked:after:translate-x-full",

              "disabled:cursor-not-allowed",

              className,
            ]

              .filter(Boolean)

              .join(" ")}
          />
        </label>

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span
                className="
                  text-sm
                  font-medium
                  text-neutral-800
                "
              >
                {label}

                {required && <span className="text-red-600"> *</span>}
              </span>
            )}

            {description && (
              <span
                className="
                  text-xs
                  text-neutral-500
                "
              >
                {description}
              </span>
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
