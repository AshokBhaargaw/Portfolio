import React from 'react'
import Header from '../Components/ui/Header/Header'
import Footer from '../Components/ui/Footer/Footer'
import HeroSection from '../Components/Homepage/HeroSection'
import SkillsSection from '../Components/Homepage/SkillsSection'
import Experience from "../Components/Homepage/Experience";
import EducationSection from "../Components/Homepage/EducationSection";
import Contact from "../Components/Homepage/Contact";
import About from "../Components/Homepage/About";
import ProjectSection from "../Components/Homepage/ProjectSection";
import ThreeInOne from "../Components/Homepage/ThreeInOne";


export default function page() {
    return (
        <>
            <Header />
            <HeroSection />
            <ProjectSection />
            <ThreeInOne />
            <About />
            <Experience />
            <EducationSection />
            <SkillsSection />
            <Contact />
            <Footer />
        </>
    )
}
