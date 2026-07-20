import type { ReactNode } from "react";

import type { HTMLMotionProps } from "framer-motion";

export interface AnimatedProps extends HTMLMotionProps<"div"> {
  children: ReactNode;

  delay?: number;
}
