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


      {/* Contenu principal */}
      <motion.div
        className="max-w-7xl w-full px-20 flex space-x-8 items-center relative z-10"
        style={{ scale, y }}
      >
        {/* IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -80 }}
          transition={{ duration: 1 }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-between">
            <div className="w-[260px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden ">
              <img src={img} alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Ligne zigzag */}
        <div className="flex justify-center md: w-20">
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
          className=" max-w-xl text-left"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : 80 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl text-left font-bold mb-6 text-white">
             Why My Profile Matches Your Needs 
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
          I am able to transform an idea or a design mockup into a professional, responsive, and modern website.
           I place a strong emphasis on performance, design quality, and user experience, 
           creating interfaces that capture attention and deliver real value to projects.
          </p>

          <h3 className="text-xl font-bold mb-3 md:mt-6 text-white">My Skills and Expertise</h3>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Creativity and a strong sense of modern design</li>
            <li>Ability to turn ideas into fully functional websites</li>
            <li>Attention to detail and visual quality</li>
            <li>Quick learning and adaptability to new technologies</li>
          </ul>
          
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