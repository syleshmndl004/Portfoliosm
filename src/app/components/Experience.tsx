import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

const experiences = [

  {
    title: "Web Developer",
    company: "StartUp Hub",
    location: "Morang,Biratnagar",
    period: "2025 - 2026",
    type: "work",
    achievements: [
      "Developed and maintained multiple client websites",
      "Implemented modern frontend frameworks and best practices",
      "Worked directly with clients to understand requirements",
    ],
  },
];

const education = [
  {
    degree: "Bsc Hons. Computer Science",
    University: "University of Wolverhampton",
    institution: "Biratnagar International College",
    location: "Morang,Biratnagar",
    period: "2024 - 2026",
    type: "education",
    status: "running",
    achievements: [
      "On the Way",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-card/50 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-40 left-20 size-56 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 60, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 13,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2.5 sm:p-3 bg-primary/10 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="size-5 sm:size-6 text-primary" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold">Work Experience</h3>
            </motion.div>
            <div className="relative space-y-6 sm:space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-0 md:pl-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-2 size-3 bg-primary rounded-full -translate-x-1/2 hidden md:block"
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(var(--primary), 0.4)",
                        "0 0 0 10px rgba(var(--primary), 0)",
                        "0 0 0 0 rgba(var(--primary), 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  
                  <motion.div whileHover={{ y: -5, scale: 1.02 }}>
                    <Card className="p-5 sm:p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold">{exp.title}</h4>
                          <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {exp.location} • {exp.period}
                          </p>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-xs sm:text-sm text-muted-foreground flex gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            >
                              <span className="text-primary">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2.5 sm:p-3 bg-primary/10 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="size-5 sm:size-6 text-primary" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </motion.div>
            <div className="relative space-y-6 sm:space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-0 md:pl-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-2 size-3 bg-primary rounded-full -translate-x-1/2 hidden md:block"
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(var(--primary), 0.4)",
                        "0 0 0 10px rgba(var(--primary), 0)",
                        "0 0 0 0 rgba(var(--primary), 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 1,
                    }}
                  />
                  
                  <motion.div whileHover={{ y: -5, scale: 1.02 }}>
                    <Card className="p-5 sm:p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold">{edu.degree}</h4>
                          <p className="text-primary font-medium text-sm sm:text-base">{edu.institution}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {edu.location} • {edu.period}
                          </p>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-xs sm:text-sm text-muted-foreground flex gap-2"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            >
                              <span className="text-primary">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}