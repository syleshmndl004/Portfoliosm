import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/saileshmandal",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/saileshmandal",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/saileshmandal",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:saileshkumar2061@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating background */}
      <motion.div
        className="absolute top-0 left-1/2 size-40 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 sm:p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="size-4 sm:size-5" />
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm sm:text-base text-muted-foreground">
              © {currentYear} Sailesh Mandal. All rights
              reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Designed & Built with 🤞 by Sailesh Mandal
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
