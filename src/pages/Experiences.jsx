import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  /* ================= EXPERIENCE DATA ================= */
  const experiences = [
    {
      year: "2024",
      title: "Front-End Developer",
      company: "Freelance",
      description:
        "Development of modern and high-performance websites using React, Tailwind CSS and advanced animations.",
    },
    {
      year: "2023",
      title: "Web Developer",
      company: "Personal Projects",
      description:
        "Created several modern portfolio websites and landing pages with a strong focus on UI/UX design.",
    },
    {
      year: "2022",
      title: "Learning Web Development",
      company: "Self Learning",
      description:
        "Started learning HTML, CSS and JavaScript and built my first responsive websites.",
    },
  ];

  /* ================= SKILLS DATA ================= */
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "Responsive Design",
    "Modern UI/UX",
  ];

  /* ================= ANIMATION ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        

        {/* ================= LEFT SIDE (EXPERIENCE) ================= */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            My <span className="text-blue-500">Experience</span>
          </motion.h2>

          <div className="relative border-l border-blue-500/40 pl-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-14 relative"
              >
                {/* Dot */}
                <div className="absolute -left-[14px] top-2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40"></div>

                {/* Card */}
                <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-2xl hover:border-blue-500/60 transition duration-300">
                  <span className="text-blue-400 text-sm font-semibold">
                    {exp.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>

                  <p className="text-blue-300 font-medium mt-1">
                    {exp.company}
                  </p>

                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE (SKILLS SECTION) ================= */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            My <span className="text-blue-500">Skills</span>
          </motion.h2>

          {/* Skills Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0f172a] border border-slate-700 p-6 rounded-2xl text-center hover:border-blue-500/60 transition duration-300"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>

          {/* Professional Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-[#020617] border border-blue-500/20 p-6 rounded-2xl"
          >
            <p className="text-slate-300 leading-relaxed">
              I specialize in building modern, responsive and high-performance
              websites. My focus is on clean UI design, smooth animations and
              excellent user experience. I transform ideas into professional
              digital products using modern technologies like React, Tailwind
              CSS and animation libraries.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}