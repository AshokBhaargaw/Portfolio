"use client"

import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ExternalLink, Github, Layers, } from "lucide-react";
import Image from "next/image";
import Button from "../Buttons/Button";
import type { Project } from '@/redux/types/project'
import { useState } from "react";

interface ProjectProps {
  project: Project;
  currentProject: number;
  totalProjects: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Project({ project, currentProject, totalProjects, onNext, onPrev, }: ProjectProps) {
  const [showFullDesc, setShowFullDesc] = useState(false)

  return (
    <div className="flex flex-col items-center gap-12 xl:gap-20 lg:flex-row">
      {/* Left: Laptop Preview */}
      <div className="w-full xl:w-3/5 flex justify-center">
        <div className="relative w-full max-w-[800px] group">
          <Image
            src="/laptop.png"
            alt="Laptop frame"
            width={1600}
            height={1000}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />

          <div className="absolute top-[6%] left-[11%] w-[78%] h-[80%] rounded overflow-hidden bg-black">
            <div className="h-full overflow-y-auto scrollbar-hide">
              <a href={project.liveUrl} target="_blank">
                <Image
                  src={project.image || "/PortfolioImage/image.png"}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={1400}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Details */}
      <div className="w-full xl:w-2/5 flex flex-col gap-6">
        <h3 className="text-3xl md:text-4xl font-bold">
          {project.title}
        </h3>

        <div className="flex">
          <p className={`text-muted-foreground text-base sm:text-lg ${!showFullDesc && "md:line-clamp-3 line-clamp-4"} `}>
            {project.description}
          </p>
          {
            showFullDesc ?
              <ChevronUp onClick={() => setShowFullDesc(false)} className="place-self-end h-full mb-3 cursor-pointer" size={80} />
              :
              <ChevronDown onClick={() => setShowFullDesc(true)} className="place-self-end h-full mb-3 cursor-pointer" size={80} />
          }
        </div>


        {/* Tech Stack */}
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">
            <Layers size={16} /> Tech Stack
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-sm rounded-full bg-surface border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="flex items-center gap-2 text-secondary font-semibold text-sm uppercase">
            <CheckCircle2 size={16} /> Key Features
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="text-sm text-muted-foreground">
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                Live Demo <ExternalLink size={16} />
              </Button>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="gap-2">
                <Github size={18} /> Source Code
              </Button>
            </a>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-center items-center gap-4 pt-6">
          <button onClick={onPrev} disabled={!onPrev}>
            <ChevronLeft size={28} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalProjects }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${idx === currentProject
                  ? "w-6 bg-primary"
                  : "w-2 bg-gray-600"
                  }`}
              />
            ))}
          </div>

          <button onClick={onNext} disabled={!onNext}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
