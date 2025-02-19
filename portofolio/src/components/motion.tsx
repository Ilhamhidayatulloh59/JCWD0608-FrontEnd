"use client"

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  direction: "left" | "right";
  delay?: number;
}

export default function Motion({
  children,
  direction,
  delay = 0,
}: MotionProps) {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? "-100%" : "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
