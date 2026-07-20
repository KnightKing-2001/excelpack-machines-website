import { motion } from "framer-motion";

import { staggerContainer } from "@/lib/motion";

import type { AnimatedProps } from "./motion.types";

export function AnimatedContainer({ children, ...props }: AnimatedProps) {
  return (
    <motion.div
      variants={staggerContainer}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
      }}

      {...props}
    >
      {children}
    </motion.div>
  );
}
