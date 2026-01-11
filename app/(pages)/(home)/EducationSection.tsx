"use client";

import { Container } from "@/Components/ui";
import { GraduationCap, School, MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    type: "University Degree",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jai Narain Vyas University",
    location: "Jodhpur, Rajasthan",
    year: "2021 – 2024",
    status: "Graduated",
    description:
      "Specialized in Software Development and Web Technologies. Completed comprehensive coursework in algorithms, database management, and system design. Built responsive web applications using the MERN stack.",
    icon: GraduationCap,
    gradient: "from-primary/20 via-primary/5 to-transparent",
    border: "group-hover:border-primary/50",
    text_gradient: "from-primary to-white",
  },
  {
    type: "Schooling",
    degree: "Senior & Secondary Education",
    institution: "GSSS, Ramdevra",
    location: "Ramdevra, Rajasthan",
    year: "2019 – 2021",
    status: "Completed",
    description:
      "Focused on Science and Mathematics. Developed strong analytical skills and foundational knowledge in computer science. Participated in various tech-related inter-school competitions.",
    icon: School,
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    border: "group-hover:border-secondary/50",
    text_gradient: "from-secondary to-white",
  },
];

export default function EducationSection() {
  return (
    <section className=" pb-40 relative overflow-hidden" id="education">
      {/* Background Pattern - distinct from blobs */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 relative z-10"
        >
          {/* Vertical Line */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary mb-6" />

          <h3 className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-white/90">
            <Award className="w-6 h-6 text-primary" />
            Academic Journey
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative p-8 h-full rounded-3xl bg-dark-border/40 hover:bg-dark-border/60 border border-white/5 ${edu.border} backdrop-blur-xl transition-all duration-500 overflow-hidden`}
            >
              {/* Background Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`} />

              {/* Large Watermark Icon */}
              <edu.icon
                className="absolute -bottom-8 -right-8 w-64 h-64 text-white/[0.02] group-hover:text-white/[0.05] group-hover:rotate-12 transition-all duration-700 ease-out"
                strokeWidth={0.5}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <edu.icon size={32} className="text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/10 bg-white/5 text-slate-300">
                    {edu.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${edu.text_gradient}`}>
                  {edu.degree}
                </h3>
                <p className="text-lg text-white/80 font-medium mb-4 flex items-center gap-2">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {edu.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1.5">
                    <Award size={14} /> {edu.status}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm mt-auto">
                  {edu.description}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8 group-hover:via-white/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
