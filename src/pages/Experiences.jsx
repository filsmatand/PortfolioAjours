import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Front-End Developer",
      company: "Freelance",
      description:
        "Building modern and high-performance websites using React, Tailwind CSS and advanced animations.",
    },
    {
      year: "2023",
      title: "Web Developer",
      company: "Personal Projects",
      description:
        "Designed and developed multiple portfolio and landing page projects with modern UI/UX.",
    },
    {
      year: "2022",
      title: "Learning Web Development",
      company: "Self Learning",
      description:
        "Started learning HTML, CSS and JavaScript and built my first responsive websites.",
    },
  ];

  // Scroll progress pour effets 3D
  const { scrollYProgress } = useScroll();
  const scaleLine = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotateCards = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const translateZCards = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6 md:px-16">
      <div className="max-w-6xl w-full">
        {/* Titre */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative perspective-1000">
          {/* Ligne verticale animée */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-green-500/40 origin-top"
            style={{ scaleY: scaleLine }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-20 flex flex-col md:flex-row items-start md:items-center`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Point timeline */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>

              {/* Carte avec effet 3D */}
              <motion.div
                className={`md:w-1/2`}
                style={{
                  rotateY: index % 2 === 0 ? rotateCards : rotateCards.pipe((r) => -r),
                  translateZ: translateZCards,
                  perspective: 1000,
                }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <span className="text-green-400 text-sm font-semibold">
                    {exp.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
                    {exp.title}
                  </h3>

                  <p className="text-white/70 mt-2">{exp.company}</p>

                  <p className="text-white/80 mt-4 text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}