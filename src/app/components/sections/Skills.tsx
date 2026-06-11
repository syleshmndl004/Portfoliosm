import { Card } from "../ui/card";
import { motion } from "motion/react";
import { SkillCloud } from "../shared/SkillCloud";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3", icon: "🎨", level: 95 },
      { name: "JavaScript", icon: "⚡", level: 90 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "PHP", icon: "🟢", level: 85 },
      { name: "JAVA", icon: "🟢", level: 85 },
    ],
  },
  {
    category: "Design & Tools",
    technologies: [
      { name: "Figma", icon: "🎨", level: 90 },
      { name: "Git", icon: "📦", level: 92 },
      { name: "GitHub", icon: "😺", level: 90 },
      { name: "VS Code", icon: "💻", level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-20 left-10 size-60 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillSet, setIndex) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: setIndex * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="p-5 sm:p-6 hover:shadow-lg transition-shadow h-full">
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: setIndex * 0.1 + 0.2 }}
                >
                  {skillSet.category}
                </motion.h3>
                <div className="space-y-3 sm:space-y-4">
                  {skillSet.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: setIndex * 0.1 + techIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <motion.span
                            className="text-xl sm:text-2xl"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: techIndex * 0.5,
                              ease: "easeInOut",
                            }}
                          >
                            {tech.icon}
                          </motion.span>
                          <span className="font-medium text-sm sm:text-base">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: setIndex * 0.1 + techIndex * 0.1 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}