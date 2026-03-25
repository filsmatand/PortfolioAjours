import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../images/about.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [show, setShow] = useState(false);
  const pathRef = useRef(null);
  const pointsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setShow(true);

    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }

    pointsRef.current.forEach((point, i) => {
      if (!point) return;

      gsap.fromTo(
        point,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${80 - i * 5}%`,
            end: `top ${70 - i * 5}%`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const skillsList = [
    { icon: "✨", text: "Creativity and a strong sense of modern design" },
    { icon: "🎯", text: "Ability to turn ideas into fully functional websites" },
    { icon: "🔍", text: "Attention to detail and visual quality" },
    { icon: "⚡", text: "Quick learning and adaptability to new technologies" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6"
    >
      <motion.div
        style={{ scale, y }}
        className="w-full max-w-7xl py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* IMAGE */}
        <motion.div
          className="w-full flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -60 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ y: imageY }}
            className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="About"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              Front-End Developer
            </div>
          </motion.div>
        </motion.div>

        {/* SVG LINE - simplifié pour mobile */}
        <div className="hidden lg:flex justify-center">
          <svg
            width="80"
            height="300"
            viewBox="0 0 80 300"
            className="drop-shadow-lg"
          >
            <path
              d="M40 0 L30 30 L50 60 L30 90 L50 120 L30 150 L50 180 L40 210"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            <path
              ref={pathRef}
              d="M40 0 L30 30 L50 60 L30 90 L50 120 L30 150 L50 180 L40 210"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {[40, 30, 50, 30, 50, 30, 50, 40].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[0, 30, 60, 90, 120, 150, 180, 210][i]}
                r="4"
                fill="#3b82f6"
                ref={(el) => (pointsRef.current[i] = el)}
                opacity="0"
              />
            ))}
          </svg>
        </div>

        {/* TEXT */}
        <motion.div
          className="w-full max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : 60 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why My Profile Matches Your Needs
          </h2>

          <p className="text-slate-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            I am able to transform an idea or a design mockup into a
            professional, responsive and modern website. I focus on performance,
            design quality and user experience to create interfaces that truly
            add value to projects.
          </p>

          <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-4">
            {skillsList.map((skill, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500 flex items-center justify-center text-lg sm:text-xl">
                  {skill.icon}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-6 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition">
            Let's Work Together
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}