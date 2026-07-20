import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

import type { AnimatedProps } from "./motion.types";

export function AnimatedSection({ children, delay = 0, ...props }: AnimatedProps) {
  return (
    <motion.section
      variants={fadeUp}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.35,
        delay,
      }}

      {...props}
    >
      {children}
    </motion.section>
  );
}
