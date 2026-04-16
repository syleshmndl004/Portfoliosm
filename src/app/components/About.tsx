import { Lightbulb, Target, Heart, Rocket } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { GitHubStats } from "./GitHubStats";

const personalityPoints = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I thrive on tackling complex challenges with creative solutions",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description:
      "Meticulous attention to every pixel and line of code",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description:
      "Building experiences that users love and remember",
  },
  {
    icon: Rocket,
    title: "Continuous Learner",
    description:
      "Always exploring new technologies and best practices",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-card/50 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 right-20 size-40 bg-primary/5 rounded-full blur-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm{" "}
              <span className="text-foreground font-medium">
                Sailesh Mandal
              </span>
              , a passionate Developer and a Learner. based in{" "}
              <span className="text-foreground font-medium">
                Nepal
              </span>
              . With over years of experience in web
              development, I specialize in creating seamless
              digital experiences that bridge the gap between
              beautiful design and robust functionality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              What makes me unique is my ability to see projects
              from both technical and creative perspectives. I
              don't just write code—I craft solutions that solve
              real problems while delighting users. Whether it's
              building a complex web application or designing an
              intuitive interface, I bring dedication,
              creativity, and technical excellence to every
              project.
            </motion.p>
            <motion.p
              className="text-foreground font-medium italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "Great design is not just what looks good. It's
              what works well."
            </motion.p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {personalityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <Card className="p-5 sm:p-6 hover:shadow-lg transition-all h-full">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <point.icon className="size-10 sm:size-12 mb-3 sm:mb-4 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        <GitHubStats />
      </div>
    </section>
  );
}