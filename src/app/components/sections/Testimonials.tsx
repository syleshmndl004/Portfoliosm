import { motion } from "motion/react";
import { Card } from "../ui/card";

const funFacts = [
  {
    emoji: "🔍",
    title: "Currently Googling",
    text: "\"why is my code not working\" at 2am — and finding the answer was a missing semicolon.",
  },
  {
    emoji: "☕",
    title: "Fuel of Choice",
    text: "Tea in the morning, energy drink mid-build, regret at midnight. Classic dev cycle.",
  },
  {
    emoji: "🐛",
    title: "Bug Report",
    text: "Spent 3 hours debugging. Turned out I was editing the wrong file. We don't talk about it.",
  },
  {
    emoji: "📚",
    title: "Current Rabbit Hole",
    text: "Started learning React. Now I'm 47 tabs deep into TypeScript, Tailwind, and somehow Next.js.",
  },
  {
    emoji: "🎬",
    title: "Off the Clock",
    text: "Movies and series are my way to recharge. Nothing beats finishing a build and diving into a good thriller or binge-watching an entire series in one sitting.",
  },
  {
    emoji: "💡",
    title: "Best Ideas Come From",
    text: "The shower. The bus. 11:59 PM right before sleep. Never at the desk, obviously.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-1/4 size-48 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 size-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Beyond the Code
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            The stuff they don't put on a résumé — but probably should
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="p-5 sm:p-6 hover:shadow-lg transition-all h-full flex flex-col gap-3">
                <motion.div
                  className="text-4xl"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {fact.emoji}
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-primary">
                  {fact.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {fact.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}