import { CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Github, Layers } from 'lucide-react';
import { ProjectCardsData } from '../../../data/projects';
import Image from 'next/image'
import React from 'react'
import Button from '../Buttons/Button';

interface props {
    project: any;
    handleNext?: () => void;
    handlePrev?: () => void;
    currentProject: number;
    setCurrentProject: (project: number) => void;
    leftRight?: number;
}

export default function Project(
    {
        project,
        handleNext,
        handlePrev,
        currentProject,
        setCurrentProject,
        leftRight,
    }: props
) {
    return (
        <div className={`flex flex-col items-center justify-center gap-12 xl:gap-20 ${leftRight !== undefined && leftRight % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            {/* Left Section: Laptop Mockup */}
            <div className="w-full xl:w-3/5 flex justify-center perspective-1000">
                <div className="relative w-full max-w-[800px] group transition-transform duration-500 ease-out hover:scale-[1.02]">
                    {/* Laptop Frame */}
                    <div className="relative z-20 pointer-events-none">
                        <Image
                            src="/laptop.png"
                            alt="Laptop frame"
                            width={1600}
                            height={1000}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Screen Content Mask */}
                    <div className="absolute top-[6%] left-[11%] w-[78%] h-[80%] md:h-90 rounded-[2%] overflow-hidden bg-black z-10">
                        {/* Scrollable Image Container */}
                        <div className="w-full h-full overflow-y-auto scrollbar-hide">
                            <Image
                                key={project.PName} // Force re-render on change
                                src={project.PImage}
                                alt={`${project.PName} preview`}
                                width={1200}
                                height={800} // Increased height to allow scrolling
                                className="w-full h-auto object-cover transition-opacity duration-500"
                            />
                        </div>
                        {/* Hover Overlay hint */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/10">
                                Scroll to view
                            </span>
                        </div>
                    </div>

                    {/* Glow beneath laptop */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-primary/20 blur-[60px] -z-10" />
                </div>
            </div>

            {/* Right Section: Project Details */}
            <div className="w-full xl:w-2/5 flex flex-col gap-5 animate-fade-in-up">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {project.PName}
                        </h3>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.PDescription}
                    </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-border-soft via-border to-transparent" />

                {/* Tech Stack */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm">
                        <Layers size={16} /> <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.TechStack?.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm font-medium rounded-full bg-surface border border-border-soft text-subtle-foreground hover:text-white hover:border-primary/30 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm">
                        <CheckCircle2 size={16} /> <span>Key Features</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.Features?.map((feature: string) => (
                            <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/70" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                    <a href={project.PLiveDemoLink} target="_blank" className="flex-1 sm:flex-none">
                        <Button className="w-full md:px-8 gap-2 group">
                            Live Demo
                            <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </a>
                    <a href={project.PGithubLink} target="_blank" className="flex-1 sm:flex-none">
                        <Button variant="secondary" className="w-full md:px-8 gap-2">
                            <Github size={18} /> Source Code
                        </Button>
                    </a>
                </div>

                {/* Navigation Buttons (Mobile) */}
                <div className="flex sm:hidden justify-center gap-4 mt-6">
                    <button onClick={handlePrev} className="p-3 rounded-full border border-border-soft bg-surface active:bg-white/10">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex items-center gap-1">
                        {ProjectCardsData.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentProject ? "w-6 bg-primary" : "bg-gray-700"}`}
                            />
                        ))}
                    </div>
                    <button onClick={handleNext} className="p-3 rounded-full border border-border-soft bg-surface active:bg-white/10">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}
