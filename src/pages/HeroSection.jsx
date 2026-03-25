import React,{ useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaTelegram, FaGithub, FaPinterest } from "react-icons/fa";
import img from "../images/bg.png";
import img1 from "../images/portfolio.png";
import AnimatedText from "../components/AnnimationText";
import { motion } from "framer-motion";


export default function Router() {

   const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);


  return (
    <section className=" md:mt-10  w-full md:h-[90vh] relative flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <img
        src={img}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative  md:mt-4 mt-20 z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

       
        <div className="text-white text-left md:text-left ">
          <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-green-500 mb-2"
        >
          Hi I'm Fils Matanda
        </motion.h4>
          <AnimatedText text="Building Modern Digital Experiences" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg opacity-90 mb-8 max-w-lg mx-auto md:mx-0"
        >
          I design and develop high-quality digital products focused on
          performance, clean design, and exceptional user experience.
        </motion.p>

         

         
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-green-600 via-green-700 to-slate-900  hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
              View Projects
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image portfolio */}
        <div className="flex justify-center md:justify-end">
          {/* Section badges
          <div className="absolute w-53 h-10 bg-white shadow-sm rounded-xl shadow-lg font-bold m-10 p-2 right-72">Bonjour bienvenu sur mon portfolio</div> */}
          <img
            src={img1}
            alt="portfolio"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />

          {/*Section Reseaux sociaux*/}
          <div className={`transition-all duration-700 ${
          show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 absolute h-96 bg-black/70 left-34 rounded-lg shadow-2xl shadow-white/10 flex flex-col items-center justify-center"
        }`} 
        > 
            <div className="bg-white/5 rounded-lg m-3 p-2">
              <FaLinkedin className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
            <div className="bg-white/5 rounded-lg m-3 p-2">
                <FaTwitter className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
            <div className="bg-white/5 rounded-lg m-3 p-2">
              <FaFacebook className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
            <div className="bg-white/5 rounded-lg m-3 p-2">
              <FaTelegram className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
             <div className="bg-white/5 rounded-lg m-3 p-2">
              <FaGithub className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
             <div className="bg-white/5 rounded-lg m-3 p-2">
              <FaPinterest className="text-white text-xl hover:text-green-400 cursor-pointer" />
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}