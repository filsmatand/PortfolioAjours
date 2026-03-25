import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "" }) {
  // On sépare le texte en mots
  const words = text.split(" ");

  return (
    <motion.h1
      className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-3 inline-block"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.15, // décalage entre les mots
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}