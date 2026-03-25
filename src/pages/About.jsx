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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <motion.div
        style={{ scale, y }}
        className="w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* IMAGE */}
        <motion.div
          className="w-full flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -80 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ y: imageY }}
            className="relative w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px]"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="About"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
              Front-End Developer
            </div>
          </motion.div>
        </motion.div>

        {/* SVG LINE */}
        <div className="hidden md:flex justify-center">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            className="drop-shadow-lg"
          >
            <path
              d="M60 0 L40 40 L80 80 L40 120 L80 160 L40 200 L80 240 L60 300"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              fill="none"
            />

            <path
              ref={pathRef}
              d="M60 0 L40 40 L80 80 L40 120 L80 160 L40 200 L80 240 L60 300"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {[60, 40, 80, 40, 80, 40, 80, 60].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[0, 40, 80, 120, 160, 200, 240, 300][i]}
                r="5"
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
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : 80 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Why My Profile Matches Your Needs
          </h2>

          <p className="text-slate-300 mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            I am able to transform an idea or a design mockup into a
            professional, responsive and modern website. I focus on performance,
            design quality and user experience to create interfaces that truly
            add value to projects.
          </p>

          <div className="mt-10 space-y-4">
            {skillsList.map((skill, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-lg">
                  {skill.icon}
                </div>

                <p className="text-slate-300 text-sm sm:text-base">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition">
            Let's Work Together
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}