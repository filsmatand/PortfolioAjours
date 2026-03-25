import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text }) {

  const letters = Array.from(text);


  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
      },
    }),
  };

  const child = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-5xl font-bold text-justify-justify text-white mb-4"
      variants={container}
      initial="hidden"
      whileInView="visible" // déclenche l'animation au scroll
      viewport={{ once: true, amount: 0.5 }} // moitié du texte visible
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}