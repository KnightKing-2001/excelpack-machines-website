import { Loader2, Search, X } from "lucide-react";

import { useState } from "react";

import type { SearchBoxProps } from "./SearchBox.types";

const stateStyles = {
  default: "border-neutral-300 focus:border-primary-600 focus:ring-primary-600",

  success: "border-green-500 focus:border-green-600 focus:ring-green-600",

  error: "border-red-500 focus:border-red-600 focus:ring-red-600",
};

export function SearchBox({
  placeholder = "Search...",

  state = "default",

  errorMessage,

  successMessage,

  loading = false,

  onSearch,

  onClear,

  value,

  className = "",

  ...props
}: SearchBoxProps) {
  const [internalValue, setInternalValue] = useState("");

  const searchValue = value !== undefined ? String(value) : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInternalValue(newValue);

    onSearch?.(newValue);
  };

  const handleClear = () => {
    setInternalValue("");

    onClear?.();

    onSearch?.("");
  };

  const message = errorMessage ?? successMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <Search
          size={18}

          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-neutral-500
          "
        />

        <input
          type="search"

          value={searchValue}

          onChange={handleChange}

          placeholder={placeholder}

          className={[
            "w-full",

            "rounded-md",

            "border",

            "bg-white",

            "py-2",

            "pl-10",

            "pr-10",

            "text-sm",

            "outline-none",

            "transition",

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

        {loading && (
          <Loader2
            size={18}

            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              animate-spin
              text-neutral-500
            "
          />
        )}

        {!loading && searchValue && (
          <button
            type="button"

            onClick={handleClear}

            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-neutral-500
              hover:text-neutral-800
            "

            aria-label="Clear search"
          >
            <X size={18} />
          </button>
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
