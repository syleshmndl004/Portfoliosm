import { ExternalLink, Github } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

// Import project images
import Project1 from "../../../imports/Project1.png";
import Project2 from "../../../imports/Project2.png";
import Project3 from "../../../imports/Project3.png";
import Project4 from "../../../imports/image.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A modern weather application that provides real-time weather information with a clean and intuitive interface. Features current conditions, forecasts, and location-based weather updates.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://syleshmndl004.github.io/weatherapp/",
    github: "https://github.com/syleshmndl004/weatherapp",
  },
  {
    id: 2,
    title: "Movie Search",
    description:
      "An interactive movie search application that allows users to discover and explore movies. Features include search functionality, movie details, ratings, and a responsive design.",
    image: Project2,
    tags: ["HTML", "CSS", "JavaScript", "OMDb API"],
    link: "https://syleshmndl004.github.io/moviesearch/",
    github: "https://github.com/syleshmndl004/moviesearch",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies and featuring a clean, professional design.",
    image: Project3,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://syleshmndl004.github.io/Portfolio/",
    github: "https://github.com/syleshmndl004/Portfolio",
  },
  {
    id: 4,
    title: "Vehicle Rental Management System",
    description:
      "A comprehensive vehicle rental management system for handling vehicle bookings, customer management, and rental operations. Features include booking tracking, inventory management, and customer dashboard.",
    image: Project4,
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://student.bicnepal.edu.np/~np02cs4s250016/public/login.php",
    github:
      "https://github.com/syleshmndl004/Vehicle-Rental-Management-System",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 size-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A selection of my recent work showcasing creativity, technical expertise, and attention to detail
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="size-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 sm:gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="p-2.5 sm:p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="size-4 sm:size-5 text-black" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} source code`}
                      className="p-2.5 sm:p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="size-4 sm:size-5 text-black" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-xs sm:text-sm">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
