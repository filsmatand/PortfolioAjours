import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Front-End Developer",
      company: "Freelance",
      description:
        "Building modern and high-performance websites using React, Tailwind CSS and advanced animations.",
      icon: "💻",
    },
    {
      year: "2023",
      title: "Web Developer",
      company: "Personal Projects",
      description:
        "Designed and developed multiple portfolio and landing page projects with modern UI/UX.",
      icon: "🎨",
    },
    {
      year: "2022",
      title: "Learning Web Development",
      company: "Self Learning",
      description:
        "Started learning HTML, CSS and JavaScript and built my first responsive websites.",
      icon: "📚",
    },
  ];

  const skillsData = [
    { name: "HTML", percentage: 95, color: "#f97316" },
    { name: "CSS", percentage: 90, color: "#3b82f6" },
    { name: "JavaScript", percentage: 88, color: "#eab308" },
    { name: "React.js", percentage: 92, color: "#06b6d4" },
    { name: "Tailwind CSS", percentage: 94, color: "#22d3ee" },
    { name: "Framer Motion", percentage: 85, color: "#a855f7" },
    { name: "GSAP", percentage: 80, color: "#10b981" },
    { name: "Three.js", percentage: 75, color: "#6366f1" },
    { name: "Responsive Design", percentage: 93, color: "#ec4899" },
    { name: "Modern UI/UX", percentage: 89, color: "#8b5cf6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Custom Tooltip for Chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-blue-500/50 rounded-lg p-3 shadow-lg">
          <p className="text-white font-bold">{payload[0].payload.name}</p>
          <p className="text-blue-400 font-semibold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 md:px-16 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* ================= LEFT SIDE - EXPERIENCE ================= */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>

          {/* Vertical Line with Gradient */}
          <div className="absolute left-2 top-32 h-96 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-16 mb-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Animated Dot */}
              <motion.div
                className="absolute left-0 top-2 w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
              </motion.div>

              {/* Card with Advanced Hover Effects */}
              <motion.div
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-blue-400 text-sm font-bold px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/30">
                      {exp.year}
                    </span>
                    <span className="text-3xl">{exp.icon}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-purple-300 font-semibold mb-4">{exp.company}</p>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Animated Underline */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= RIGHT SIDE - SKILLS CHART ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>

          {/* Chart Container */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={skillsData}
                margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
              >
                {/* Grid */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(71, 85, 105, 0.3)"
                  vertical={false}
                />

                {/* Axes */}
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fill: "rgba(226, 232, 240, 0.7)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(71, 85, 105, 0.3)" }}
                />

                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "rgba(226, 232, 240, 0.7)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(71, 85, 105, 0.3)" }}
                  label={{ value: "Proficiency %", angle: -90, position: "insideLeft" }}
                />

                {/* Tooltip */}
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(59, 130, 246, 0.1)" }} />

                {/* Bars */}
                <Bar
                  dataKey="percentage"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-out"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm mb-4">Skill Proficiency Levels:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">90-100% (Expert)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">80-89% (Advanced)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">70-79% (Intermediate)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Below 70% (Beginner)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl mt-8"
          >
            <p className="text-slate-200 text-base leading-relaxed">
              I specialize in building modern, high-performance websites with smooth animations and clean user interfaces. My goal is to create digital experiences that are not only visually impressive but also fast and user-friendly. With expertise in React, Tailwind CSS, and advanced animation libraries, I transform ideas into interactive, responsive, and engaging web applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">50+</p>
                <p className="text-slate-400 text-sm">Projects</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">30+</p>
                <p className="text-slate-400 text-sm">Clients</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">3+</p>
                <p className="text-slate-400 text-sm">Years</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
