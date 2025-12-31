"use client";

import React, { useState } from "react";
import { Heading, Project, } from "@/Components/ui";
import { ProjectCardsData } from '@/data/projects';
import Contact from "@/app/(pages)/contact/Contact";

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(0);

    const handleNext = () => {
        setCurrentProject((prev) => (prev + 1) % ProjectCardsData.length);
    };

    const handlePrev = () => {
        setCurrentProject((prev) => (prev - 1 + ProjectCardsData.length) % ProjectCardsData.length);
    };

    const project = ProjectCardsData[currentProject];

    return (
        <main className="min-h-screen relative overflow-hidden [scrollbar-width:none] ">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="lg:h-screen [scrollbar-width:none] overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-smooth">
                {/* 1️⃣ Header */}
                <section className="min-h-screen lg:h-screen lg:snap-start flex flex-col items-center justify-center text-center">
                    <Heading as="h1" className="text-5xl md:text-6xl font-bold mb-4">
                        My Portfolio
                    </Heading>
                    <p className="text-muted-foreground text-lg max-w-[90vw] md:max-w-xl mx-auto">
                        A curated selection of projects built using modern web technologies.
                        These projects highlight my skills in frontend development,
                        performance optimization, and responsive design.
                        Each project reflects practical problem-solving and attention to detail.
                    </p>
                </section>

                {/* 2️⃣ Projects */}
                {ProjectCardsData.map((project, i) => (
                    <section
                        key={i}
                        className="lg:h-screen lg:snap-start flex items-center w-5/6 mx-auto"
                    >
                        <Project
                            leftRight={i}
                            project={project}
                            currentProject={currentProject}
                            setCurrentProject={setCurrentProject}
                        />
                    </section>
                ))}
                <section className="lg:snap-start">
                    <Contact />
                </section>
            </div>

        </main>
    );
}
