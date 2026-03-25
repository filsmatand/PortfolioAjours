import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../images/about.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [show, setShow] = useState(false);
  const pathRef = useRef(null);
  const pointsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setShow(true);

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

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

    pointsRef.current.forEach((point, i) => {
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

  // Scroll caméra effet zoom + déplacement
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Gradient lumineux animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-black"
        style={{ opacity: opacityBg }}
      />

      {/* Spline 3D
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Spline scene="https://prod.spline.design/ton-scene/scene.splinecode" />
      </div> */}

      {/* Contenu principal */}
      <motion.div
        className="max-w-7xl w-full grid md:grid-cols-3 gap-10 items-center relative z-10"
        style={{ scale, y }}
      >
        {/* IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -80 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[260px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20">
            <img src={img} alt="About" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Ligne zigzag */}
        <div className="flex justify-center">
          <svg width="120" height="320" viewBox="0 0 120 320">
            <path
              d="M60 0 L40 40 L80 80 L40 120 L80 160 L40 200 L80 240 L60 300"
              stroke="#22c55e"
              strokeWidth="1"
              fill="none"
              opacity="0.15"
            />
            <path
              ref={pathRef}
              d="M60 0 L40 40 L80 80 L40 120 L80 160 L40 200 L80 240 L60 300"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0px 0px 12px rgba(34,197,94,0.7))",
              }}
            />
            {[60, 40, 80, 40, 80, 40, 80, 60].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[0, 40, 80, 120, 160, 200, 240, 300][i]}
                r="5"
                fill="#22c55e"
                ref={(el) => (pointsRef.current[i] = el)}
                opacity="0"
              />
            ))}
          </svg>
        </div>

        {/* TEXTE */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : 80 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Hello! I’m <span className="text-green-400 font-semibold">Fils Matanda</span>, a passionate front-end developer building modern, high-performance and visually stunning digital experiences.
          </p>
          <motion.div
            className="mt-8 h-[2px] w-24 bg-green-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: show ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}