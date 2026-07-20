import type { ReactNode } from "react";

export interface TestimonialCardProps {
  quote: string;

  name: string;

  company: string;

  designation?: string;

  avatar?: string;

  rating?: number;

  icon?: ReactNode;

  className?: string;
}
