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

import { motion } from "motion/react";

export function ParticleBackground() {
  // Generate 50 particles with random properties
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position (0-100%)
    y: Math.random() * 100, // Random vertical position (0-100%)
    size: Math.random() * 4 + 1, // Random size (1-5px)
    duration: Math.random() * 20 + 10, // Random animation duration (10-30s)
    delay: Math.random() * 5, // Random animation delay (0-5s)
  }));

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