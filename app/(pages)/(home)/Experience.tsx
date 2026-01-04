"use client";

import { useRef, useEffect } from "react";
import { Container, Heading } from "@/Components/ui";
import { Briefcase, Calendar, Loader2, AlertCircle } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchExperiences } from "@/redux/slices/experienceSlice";
export default function Experience() {
  const dispatch = useDispatch<AppDispatch>();
  const { experiences, loading, error } = useSelector((state: RootState) => state.experience);

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <Container>
        <motion.div className="text-4xl md:text-5xl font-bold text-center pb-5 mx-auto">
          Work Experience
        </motion.div>

        {loading && experiences.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-gray-400">Loading experiences...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <p className="text-red-400 font-medium">Failed to load experiences</p>
            <p className="text-gray-500 text-sm">{error}</p>
            <button
              onClick={() => dispatch(fetchExperiences())}
              className="mt-6 px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full border border-primary/30 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && experiences.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No work experience found.</p>
          </div>
        )}
        <motion.div
          className=" origin-left absolute left-1/2 -translate-x-1/2 w-100 h-0.5 bg-linear-to-r from-primary via-secondary to-primary"
        />

        <div ref={ref} className="relative flex flex-col items-center">
          {/* Central Line (Desktop) - Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {/* Central Line (Desktop) - Animated Foreground */}
          <motion.div
            style={{ scaleY: scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-primary via-secondary to-primary md:-translate-x-1/2 z-0"
          />

          <div className="w-full space-y-12 mt-10">
            {experiences.map((exp, index) => (
              <div
                key={exp._id || index}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group ${index % 2 === 0 ? "text-right items-end" : "text-left items-start"} flex flex-col`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                    <h4 className="text-lg font-semibold text-primary/80 mb-4 flex items-center gap-2 w-full justify-start md:justify-center lg:justify-start">
                      <span className={`flex items-center gap-2 w-full ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {exp.role}
                      </span>
                    </h4>
                    <p className={`text-muted-foreground leading-relaxed text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary/20 z-10 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                  <Briefcase size={20} className="text-primary" />
                </motion.div>

                {/* Date Side */}
                <div className="hidden md:block w-1/2 px-12 text-center md:text-left">
                  <span className={`inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 ${index % 2 === 0 ? "float-right" : "float-left"}`}>
                    <Calendar size={14} className="inline mr-2 mb-0.5" />
                    {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}` : " - Present"}
                  </span>
                </div>
                {/* Mobile Date */}
                <div className="absolute top-0 left-24 md:hidden">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}` : " - Present"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
