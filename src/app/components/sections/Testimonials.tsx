import { Star, Quote } from "lucide-react";
import { Card } from "../ui/card";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO",
    company: "Digital Solutions Ltd.",
    image: "👨‍💻",
    rating: 5,
    text: "Working with Sailesh has been a pleasure. He not only writes clean, maintainable code but also brings creative solutions to challenging problems. A true professional.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-1/4 size-48 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
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
            Testimonials
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            What colleagues and clients say about working with
            me
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <Card className="p-5 sm:p-6 hover:shadow-lg transition-all relative h-full">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className="size-8 sm:size-10 text-primary/20 absolute top-3 sm:top-4 right-3 sm:right-4" />
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="size-3.5 sm:size-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t">
                    <motion.div
                      className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center text-xl sm:text-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs sm:text-sm text-primary">
                        {testimonial.company}
                      </p>
                    </div>
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