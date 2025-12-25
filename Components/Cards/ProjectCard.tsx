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
      className={`rounded-xl shadow-2xl border border-white/20 shadow-black px-3 py-1 mx-5 w-90 mb-15 bg-dark-btn-bg ${className}`}
    >
      <NormalHeading as="h6" className="mb-2 mt-1">
        {PName}
      </NormalHeading>

      {/* Image */}
      <div className="w-full rounded custom-scrollbar max-h-50 overflow-y-auto mb-2">
        <Image
          src={PImage}
          alt={PName}
          width={500}
          height={300}
          className="rounded object-cover"
        />
      </div>

      {/* Tech Stack */}
      <div className="flex items-center gap-2 mb-2">
        <b>Tech Stack:</b>
        {PTack.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>

      {/* Description */}
      <p className="text-slate-300">{PDescription}</p>

      {/* Actions */}
      <div className="flex justify-around mt-3 border-t border-slate-700 pt-2">
        <a href={PLiveDemoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost">Live Demo ↗</Button>
        </a>

        <a href={PGithubLink} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost">GitHub ↗</Button>
        </a>
      </div>
    </div>
  );
}
