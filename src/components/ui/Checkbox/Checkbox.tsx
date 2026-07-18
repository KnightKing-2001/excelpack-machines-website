import { useEffect, useRef } from "react";

import type { CheckboxProps } from "./Checkbox.types";

const stateStyles = {
  default: "border-neutral-300 focus:ring-primary-600",

  success: "border-green-500 focus:ring-green-600",

  error: "border-red-500 focus:ring-red-600",
};

export function Checkbox({
  label,

  description,

  errorMessage,

  successMessage,

  state = "default",

  required,

  indeterminate,

  id,

  className = "",

  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  const checkboxId = id ?? `checkbox-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          ref={checkboxRef}

          id={checkboxId}

          type="checkbox"

          aria-invalid={state === "error"}

          aria-describedby={message || description ? `${checkboxId}-description` : undefined}

          className={[
            "mt-1",

            "h-4",

            "w-4",

            "rounded",

            "border",

            "text-primary-600",

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
                htmlFor={checkboxId}

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
                id={`${checkboxId}-description`}

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
