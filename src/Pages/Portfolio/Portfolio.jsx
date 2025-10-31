import React from "react";
import { Container, ProjectCard } from "../../Components";
import PortfolioImage1 from "/PortfolioImage/image.png";
import { FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiReacthookform } from "react-icons/si";

export default function Portfolio() {
  const ProjectCardsData = [
    {
      PName: "Personal Portfolio",
      PImage: PortfolioImage1,
      PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skill, exprience, education and etc...",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Personal Portfolio",
      PImage: PortfolioImage1,
      PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skill, exprience, education and etc...",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Personal Portfolio",
      PImage: PortfolioImage1,
      PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skill, exprience, education and etc...",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Personal Portfolio",
      PImage: PortfolioImage1,
      PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skill, exprience, education and etc...",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
  ];

  return (
    <div className="min-h-screen mt-20  justify-center">
      <Container className="flex flex-wrap "> 
        {ProjectCardsData.map((Project, i) => (
          <ProjectCard
            key={i}
            PName={Project.PName}
            PImage={Project.PImage}
            PTack={Project.PTack}
            PDescription={Project.PDescription}
            PLiveDemoLink={Project.PLiveDemoLink}
            PGithubLink={Project.PGithubLink}
          />
        ))}
      </Container>
    </div>
  );
}
