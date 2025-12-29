"use client";

import { ReactNode } from "react";
import Image from "next/image";
import NormalHeading from "../Heading/NormalHeading";
import Button from "../Buttons/Button";
import { FaJs, FaReact } from "react-icons/fa";
import "./ProjectCard.css";

type ProjectCardProps = {
  PName?: string;
  PImage?: string;
  PTack?: ReactNode[];
  PDescription?: string;
  PLiveDemoLink?: string;
  PGithubLink?: string;
  className?: string;
};

export default function ProjectCard({
  PName = "Name",
  PImage = "/PortfolioImage/image.png",
  PTack = [<FaJs key="js" />, <FaReact key="react" />],
  PDescription = "I created this beautiful website.",
  PLiveDemoLink = "https://github.com/AshokBhaargaw",
  PGithubLink = "https://github.com/AshokBhaargaw",
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`
        
        rounded-xl bg-amber-50/7
        border border-white/20
        shadow-xl shadow-amber-100/15 
        p-4 flex flex-col
        ${className}
      `}
    >
      {/* Title */}
      <NormalHeading as="h6" className="mb-3 text-center sm:text-left">
        {PName}
      </NormalHeading>

      {/* Image */}
      <div className="custom-scrollbar relative w-full max-h-40 rounded-lg overflow-y-auto mb-2">
        <Image
          src={PImage}
          alt={PName}
          width={500}
          height={800}
          className="object-cover"
        />
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold">Tech Stack:</span>
        {PTack.map((tech, i) => (
          <span key={i} className="text-lg">
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm sm:text-base mt-2 mb-4">
        {PDescription}
      </p>

      {/* Actions buttons */}
      <div className="mt-auto  flex flex-col sm:flex-row gap-3">
        <a
          href={PLiveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="primary" className="w-full rounded-xl">
            Live Demo ↗
          </Button>
        </a>

        <a
          href={PGithubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="secondary" className="w-full rounded-xl">
            GitHub ↗
          </Button>
        </a>
      </div>
    </div>
  );
}
