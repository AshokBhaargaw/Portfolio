import React from "react";
import NormalHeading from "../Heading/NormalHeading";
import Button from "../Buttons/Button";
import { FaJs, FaReact } from "react-icons/fa";
import PortfolioImage1 from "/PortfolioImage/image.png";

export default function ProjectCard({
  PName = "Name",
  PImage = PortfolioImage1,
  PTack = [<FaJs />, <FaReact />],
  PDescription = "I created this beautiful website created me.",
  PLiveDemoLink = "https://github.com/AshokBhaargaw",
  PGithubLink = "https://github.com/AshokBhaargaw",
  className,
}) {
  return (
    <div
      className={`rounded-xl shadow-2xl shadow-black px-3 py-1 mx-5 w-90 mb-15 bg-dark-btn-bg ${className}`}
    >
      <NormalHeading as="h6" className="mb-2 mt-1">
        {PName}
      </NormalHeading>
      <div className="w-full rounded max-h-50 overflow-y-scroll mb-2">
        <img src={PImage} alt="image" />
      </div>
      <div className="flex place-items-center gap-2">
        <b>Tack-stack:</b>
        {PTack.map((tack, i) => (
          <span key={i}> {tack}</span>
        ))}
      </div>
      <p className="text-slate-300">{PDescription}</p>
      <div className="flex justify-around mt-3 border-t">
        <a href={PLiveDemoLink} target="_blank">
          <Button variant="Ghost">Live Demo ↗</Button>
        </a>
        <a href={PGithubLink} target="_blank">
          <Button variant="Ghost">Github ↗</Button>
        </a>
      </div>
    </div>
  );
}
