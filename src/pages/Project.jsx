import { motion } from "framer-motion";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import { useState } from "react";

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Modern Portfolio Website",
      description:
        "A high-performance portfolio website built with React, Tailwind CSS and advanced animations.",
      image: img1,
      tech: ["React", "Tailwind", "Framer Motion"],
      category: "Web Design",
      year: "2024",
    },
    {
      title: "Landing Page UI Design",
      description:
        "Modern landing page with smooth animations, responsive layout and clean UI/UX design.",
      image: img2,
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      year: "2023",
    },
    {
      title: "3D Interactive Website",
      description:
        "Creative website using Three.js and advanced scroll animations inspired by Awwwards websites.",
      image: img1,
      tech: ["Three.js", "GSAP", "React"],
      category: "3D Web",
      year: "2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 md:px-16 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6"></div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore my latest work showcasing modern design, innovative functionality, and exceptional user experiences.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer h-96"
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
          >
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.15 : 1,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Gradient Overlay - Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>

              {/* Overlay - Animated */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                {/* Category & Year */}
                <motion.div
                  className="flex items-center justify-between mb-4"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-bold px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full border border-blue-500/50">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.year}</span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-slate-300 text-sm md:text-base leading-relaxed mb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-xl text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                ✨
              </motion.div>
            </div>

            {/* Border Gradient on Hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow:
                  hoveredIndex === index
                    ? "inset 0 0 30px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.3)"
                    : "inset 0 0 0px rgba(59, 130, 246, 0), 0 0 0px rgba(59, 130, 246, 0)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have an amazing project in mind?
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            Let's collaborate and bring your ideas to life with cutting-edge design and technology.
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
