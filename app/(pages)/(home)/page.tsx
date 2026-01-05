import React from "react";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import EducationSection from "./EducationSection";
import Projects from "./Projects";
import SkillBar from "./SkillBar";
import Contact from '../contact/Contact'

export default function page() {
  return (
    <main>
      <HeroSection />
      <SkillBar />
      <Projects />
      <Experience />
      <EducationSection />
      <Contact />
    </main>
  );
}
