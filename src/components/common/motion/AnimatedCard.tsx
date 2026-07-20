import { motion } from "framer-motion";

import { scaleIn } from "@/lib/motion";

import type { AnimatedProps } from "./motion.types";

export function AnimatedCard({ children, delay = 0, ...props }: AnimatedProps) {
  return (
    <motion.div
      variants={scaleIn}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.25,
        delay,
      }}

      {...props}
    >
      {children}
    </motion.div>
  );
}
