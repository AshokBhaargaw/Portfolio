import React from "react";
import { Container, ProjectCard } from "@/Components/";

export default function Portfolio() {
  const ProjectCardsData = [
    {
      PName: "Personal Portfolio",
      // PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skill, exprience, education and etc...",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Browser Homepage",
      // PTack: [
      //   <FaJs />,
      //   <FaReact />,
      //   <SiRedux />,
      //   <SiAppwrite />,
      // ],
      PDescription:
        "I created this page for my browser, whene I can get all the nessory things which I need in my daily life. ex: search on google or youtube, my Social media links and etc... ",
      PLiveDemoLink:
        "https://ashokbhaargaw.github.io/React-Learning-Projects/BrowserHomepage/dist/",
      PGithubLink: "https://github.com/AshokBhaargaw/React-Learning-Projects/tree/main/BrowserHomepage",
    },
  ];

  return (
    <main className="h-screen  flex  items-center">
      <Container className="flex w-screen max-w-screen gap-5">
        {ProjectCardsData.map((Project, i) => (
          <ProjectCard
            key={i}
            PName={Project.PName}
            // PImage={Project.PImage}
            PTack={Project.PTack}
            PDescription={Project.PDescription}
            PLiveDemoLink={Project.PLiveDemoLink}
            PGithubLink={Project.PGithubLink}
          />
        ))}
      </Container>

    </main>
  );
}
