import type { ReactNode } from "react";

export interface PageLayoutProps {
  children: ReactNode;

  header?: ReactNode;

  footer?: ReactNode;

  className?: string;
}
