import type { HTMLAttributes } from "react";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Surface({ children, className = "", ...props }: SurfaceProps) {
  return (
    <div
      className={`
        rounded-xl
        bg-white
        shadow-sm
        border
        border-gray-100
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
