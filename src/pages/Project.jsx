import { motion } from "framer-motion";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

export default function Project() {

  const projects = [
    {
      title: "Modern Portfolio Website",
      description:
        "A high-performance portfolio website built with React, Tailwind CSS and advanced animations.",
      image: img1,
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Landing Page UI Design",
      description:
        "Modern landing page with smooth animations, responsive layout and clean UI/UX design.",
      image: img2,
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "3D Interactive Website",
      description:
        "Creative website using Three.js and advanced scroll animations inspired by Awwwards websites.",
      image: img1,
      tech: ["Three.js", "GSAP", "React"],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black/100 to-black px-6 md:px-16 py-20">
      
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Grid projets */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
              
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-white/80 text-sm mt-2">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bouton */}
              <button className="mt-5 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white font-semibold transition duration-300 w-fit">
                View Project
              </button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}