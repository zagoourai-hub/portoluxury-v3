"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`w-full motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!filter-none ${className}`}
      initial={reducedMotion ? false : { opacity: 0.5, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
