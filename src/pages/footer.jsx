import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black/100 text-white py-12 px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

     

     
          

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-end"
        >
          <h3 className="text-lg font-semibold mb-4 text-green-400">
            Follow Me
          </h3>

          <div className="flex gap-4">
            <div className="bg-white/5 p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="bg-white/5 p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
              <FaGithub />
            </div>
            <div className="bg-white/5 p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-white/5 p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
              <FaFacebook />
            </div>
            <div className="bg-white/5 p-3 rounded-xl hover:bg-green-500 transition cursor-pointer">
              <FaTelegram />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ligne séparatrice */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/60">
        © 2024 Fils Matanda. All rights reserved.
      </div>
    </footer>
  );
}