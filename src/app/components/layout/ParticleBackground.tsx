/**
 * Particle Background Component
 * 
 * Creates an animated background with floating particles
 * that move vertically in a continuous loop. Adds depth
 * and visual interest to the portfolio.
 * 
 * Features:
 * - 50 randomly positioned particles
 * - Varying sizes and animation speeds
 * - Subtle opacity changes
 * - Non-interactive (pointer-events-none)
 * 
 * @component
 * @author Sailesh Mandal
 */

import { useMemo } from "react";
import { motion } from "motion/react";

export function ParticleBackground() {
  // Keep particle positions stable so the background does not jitter on re-renders.
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}