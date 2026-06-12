/**
 * Hero Section Component
 * 
 * The landing section of the portfolio featuring:
 * - Animated typing text showing different roles
 * - Parallax scrolling background effects
 * - Professional headshot image
 * - Call-to-action buttons for viewing projects and downloading resume
 * - Smooth entrance animations
 * 
 * @component
 * @author Sailesh Mandal
 */

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { TypingAnimation } from "../shared/TypingAnimation";
import profileImage from "../../../imports/profile.jpg";

export function Hero() {
  // Parallax scroll effects for background elements
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  /**
   * Smoothly scrolls to a specific section on the page
   * @param {string} id - The ID of the section to scroll to
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-start md:items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 size-64 bg-primary/10 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 size-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 size-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div className="max-w-6xl mx-auto w-full relative z-10" style={{ opacity }}>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.p
                className="text-base sm:text-lg text-primary font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm <span className="text-primary">Sailesh Mandal</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <TypingAnimation 
                  texts={[
                    "Full Stack Developer",
                    "UI/UX Designer",
                    "Problem Solver",
                    "Tech Enthusiast"
                  ]}
                />
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I build intuitive web experiences that combine elegant design with powerful functionality
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="gap-2 w-full sm:w-auto"
                >
                  View Projects
                  <ArrowRight className="size-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="gap-2 w-full sm:w-auto"
                >
                  Contact Me
                  <ArrowRight className="size-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right content - Headshot */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <motion.div
                className="relative size-48 sm:size-56 md:size-72 lg:size-80 xl:size-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={profileImage}
                  alt="Sailesh Mandal"
                  className="size-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
