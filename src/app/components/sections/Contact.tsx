import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

export function Contact() {
  const recipientEmail = "saileshkumar2061@gmail.com";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.name.trim()}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app with your message.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute bottom-10 right-20 size-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I'd
            love to hear from you. Let's create something
            amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
              Contact Information
            </h3>
            <div className="space-y-5 sm:space-y-6">
              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Mail className="size-5 sm:size-6 text-primary mt-1" />
                </motion.div>
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base">
                    Email
                  </p>
                  <a
                    href={`mailto:${recipientEmail}`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {recipientEmail}
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Phone className="size-5 sm:size-6 text-primary mt-1" />
                </motion.div>
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base">
                    Phone
                  </p>
                  <a
                    href="tel:+9779812358400"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    +977 9812358400
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="size-5 sm:size-6 text-primary mt-1" />
                </motion.div>
                <div>
                  <p className="font-medium mb-1 text-sm sm:text-base">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Biratnagar, Morang
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Label
                  htmlFor="name"
                  className="text-sm sm:text-base"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="text-sm sm:text-base"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label
                  htmlFor="email"
                  className="text-sm sm:text-base"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="text-sm sm:text-base"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label
                  htmlFor="message"
                  className="text-sm sm:text-base"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="text-sm sm:text-base resize-none"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
