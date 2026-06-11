/**
 * Scroll Progress Component
 * 
 * Displays a thin progress bar at the top of the page
 * that fills as the user scrolls down, providing visual
 * feedback on reading progress.
 * 
 * Uses Motion library's useScroll hook for smooth animation.
 * 
 * @component
 * @author Sailesh Mandal
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}