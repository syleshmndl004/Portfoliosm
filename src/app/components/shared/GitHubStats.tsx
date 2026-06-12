/**
 * GitHub Stats Component
 * 
 * Displays GitHub statistics with animated counters.
 * Numbers count up when the component comes into view.
 * 
 * Features:
 * - Animated number counting with spring physics
 * - Viewport detection (only animates when visible)
 * - Icon rotation on hover
 * - Responsive grid layout
 * - Color-coded stat categories
 * 
 * @component
 * @author Sailesh Mandal
 */

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { GitBranch, Star, GitFork, Code } from "lucide-react";
import { Card } from "../ui/card";
import { useEffect, useRef } from "react";
import React from "react";

// GitHub statistics data
const stats = [
  {
    icon: Code,
    label: "Total Commits",
    value: 86,
    color: "text-blue-500",
  },
  {
    icon: Star,
    label: "Stars Earned",
    value: 10,
    color: "text-yellow-500",
  },
  {
    icon: GitFork,
    label: "Forks",
    value: 1,
    color: "text-green-500",
  },
  {
    icon: GitBranch,
    label: "Repositories",
    value: 22,
    color: "text-purple-500",
  },
];

/**
 * Animated number counter component
 * Counts from 0 to target value when in view
 */
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold mb-1">
      {displayValue.toLocaleString()}
    </div>
  );
}

export function GitHubStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
            <motion.div
              className="flex justify-center mb-3"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className={`size-8 sm:size-10 ${stat.color}`} />
            </motion.div>
            <AnimatedNumber value={stat.value} />
            <div className="text-xs sm:text-sm text-muted-foreground">
              {stat.label}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}