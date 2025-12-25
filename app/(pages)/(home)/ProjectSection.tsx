"use client";

import { NormalHeading, Container, Button, ProjectCard } from "@/Components/";
import { useRouter } from "next/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function ProjectSection() {
  const router = useRouter();

  const ProjectCardsData = [
    {
      PName: "Personal Portfolio",
      PImage: "/PortfolioImage/image.png",
      // PTack: [<FaJs />, <FaReact />, <SiAppwrite />, <SiReacthookform />],
      PDescription:
        "I created my portfolio website to showcase my skills, experience, and education.",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Browser Homepage",
      PImage: "/PortfolioImage/image2.png",
      // PTack: [<FaJs />, <FaReact />, <SiRedux />, <SiAppwrite />],
      PDescription:
        "A custom browser homepage with quick access to search, social links, and daily tools.",
      PLiveDemoLink:
        "https://ashokbhaargaw.github.io/React-Learning-Projects/BrowserHomepage/dist/",
      PGithubLink:
        "https://github.com/AshokBhaargaw/React-Learning-Projects/tree/main/BrowserHomepage",
    },
    {
      PName: "Nothing",
      PImage: "/PortfolioImage/image2.png",
      // PTack: [<FaJs />, <FaReact />, <SiRedux />, <SiAppwrite />],
      PDescription:
        "A custom browser homepage with quick access to search, social links, and daily tools.",
      PLiveDemoLink:
        "https://ashokbhaargaw.github.io/React-Learning-Projects/BrowserHomepage/dist/",
      PGithubLink:
        "https://github.com/AshokBhaargaw/React-Learning-Projects/tree/main/BrowserHomepage",
    },
  ];

  return (
    <section className="min-h-screen max-w-screen">
      <NormalHeading as="h2" className="my-2">
        Projects
      </NormalHeading>
      <Container className="flex justify-between flex-col md:flex-row gap-10">
        {ProjectCardsData.map((p, i) => (
          <ProjectCard
            key={i}
            PName={p.PName}
            PImage={p.PImage}
            PTack={[""]}
            PDescription={p.PDescription}
            PLiveDemoLink={p.PLiveDemoLink}
            PGithubLink={p.PGithubLink}
            className={""}
          />
        ))}
      </Container>

      <div className="text-center md:text-right mt-2 md:mt-5 md:pr-30">
        <Button variant="ghost" onClick={() => router.push("/portfolio")}>
          Check All Projects <MdOutlineNavigateNext />
        </Button>
      </div>
    </section>
  );
}
