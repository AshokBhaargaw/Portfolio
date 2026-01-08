"use client";

import React, { useEffect, useState } from "react";
import { Heading, Project } from "@/Components/ui";
import Contact from "@/app/(pages)/contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchProjects } from "@/redux/slices/projectSlice";

export default function Portfolio() {
    const dispatch = useDispatch<AppDispatch>();
    const { projects, loading, error } = useSelector(
        (state: RootState) => state.projects
    );

    const [currentProject, setCurrentProject] = useState(0);

    useEffect(() => {
        if (projects.length === 0) {
            dispatch(fetchProjects());
        }
    }, [dispatch, projects.length]);

    const handleNext = () => {
        if (projects.length === 0) return;
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        if (projects.length === 0) return;
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="lg:h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-smooth scrollbar-hide">
                {/* 1️⃣ Header */}
                <section className="min-h-screen lg:h-screen lg:snap-start flex flex-col items-center justify-center text-center">
                    <Heading as="h1" className="text-5xl md:text-6xl font-bold mb-4">
                        My Portfolio
                    </Heading>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        A curated selection of projects built using modern web technologies.
                        These projects highlight frontend skills, performance optimization,
                        and real-world problem solving.
                    </p>
                </section>

                {/* 2️⃣ Projects */}
                {loading && (
                    <section className="min-h-screen flex items-center justify-center">
                        <p className="text-muted-foreground">Loading projects...</p>
                    </section>
                )}

                {error && (
                    <section className="min-h-screen flex items-center justify-center">
                        <p className="text-red-400">{error}</p>
                    </section>
                )}

                {!loading &&
                    !error &&
                    projects.map((project, i) => (
                        <section
                            key={project._id}
                            className="lg:h-screen lg:snap-start flex items-center w-5/6 mx-auto"
                        >
                            <Project
                                leftRight={i}
                                project={project}
                                currentProject={currentProject}
                                onNext={handleNext}
                                onPrev={handlePrev}
                                totalProjects={projects.length}
                                showMobileNav={false}
                            />
                        </section>
                    ))}

                {/* 3️⃣ Contact */}
                <section className="lg:snap-start pt-30">
                    <Contact />
                </section>
            </div>
        </main>
    );
}
