import React from "react";
import { Container, ProjectCard } from "../../Components";
import { FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiReacthookform, SiRedux } from "react-icons/si";
import PortfolioImage1 from "/PortfolioImage/image.png";
import PortfolioImage2 from "/PortfolioImage/image2.png";

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
      PName: "Browser Homepage",
      PImage: PortfolioImage2,
      PTack: [
        <FaJs />,
        <FaReact />,
        <SiRedux />,
        <SiAppwrite />,
      ],
      PDescription:
        "I created this page for my browser, whene I can get all the nessory things which I need in my daily life. ex: search on google or youtube, my Social media links and etc... ",
      PLiveDemoLink:
        "https://ashokbhaargaw.github.io/React-Learning-Projects/BrowserHomepage/dist/",
      PGithubLink: "https://github.com/AshokBhaargaw/React-Learning-Projects/tree/main/BrowserHomepage",
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
