/**
 * Skill Cloud Component
 * 
 * Interactive circular cloud of floating skill badges.
 * Each skill has its own animation and hover effects.
 * 
 * Features:
 * - Skills arranged in circular pattern
 * - Individual floating animations per skill
 * - Color-coded borders matching technology
 * - Hover effects with scale and color change
 * - Responsive sizing
 * 
 * @component
 * @author Sailesh Mandal
 */

import { motion } from "motion/react";
import { useState } from "react";

// Skill data with colors matching technology branding
const skills = [
  { name: "React", size: 1.2, color: "#61DAFB" },
  { name: "TypeScript", size: 1.1, color: "#3178C6" },
  { name: "JavaScript", size: 1.0, color: "#F7DF1E" },
  { name: "Node.js", size: 1.0, color: "#339933" },
  { name: "Python", size: 0.9, color: "#3776AB" },
  { name: "Next.js", size: 1.0, color: "#000000" },
  { name: "Tailwind", size: 1.1, color: "#06B6D4" },
  { name: "MongoDB", size: 0.9, color: "#47A248" },
  { name: "PostgreSQL", size: 0.8, color: "#4169E1" },
  { name: "Git", size: 0.9, color: "#F05032" },
  { name: "Docker", size: 0.8, color: "#2496ED" },
  { name: "AWS", size: 0.8, color: "#FF9900" },
  { name: "GraphQL", size: 0.8, color: "#E10098" },
  { name: "Redux", size: 0.8, color: "#764ABC" },
  { name: "Figma", size: 0.9, color: "#F24E1E" },
];

export function SkillCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative h-96 w-full max-w-4xl mx-auto">
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={skill.name}
            className="absolute top-1/2 left-1/2 cursor-pointer"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: x,
              y: y,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: index * 0.05,
              type: "spring",
            }}
            whileHover={{
              scale: 1.3,
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <motion.div
              className="px-4 py-2 rounded-full font-medium whitespace-nowrap shadow-lg border-2"
              style={{
                fontSize: `${skill.size}rem`,
                borderColor: skill.color,
                backgroundColor:
                  hoveredSkill === skill.name
                    ? skill.color
                    : "rgba(0,0,0,0.05)",
                color: hoveredSkill === skill.name ? "white" : skill.color,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}