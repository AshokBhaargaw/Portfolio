"use client";

import { NormalHeading, Container, Button, ProjectCard } from "@/Components/ui";
import { useRouter } from "next/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function ProjectSection() {
  const router = useRouter();

  const ProjectCardsData = [
    {
      PName: "Personal Portfolio",
      PImage: "/PortfolioImage/image.png",
      PDescription:
        "I created my portfolio website to showcase my skills, experience, and education.",
      PLiveDemoLink: "https://github.com/AshokBhaargaw",
      PGithubLink: "https://github.com/AshokBhaargaw",
    },
    {
      PName: "Browser Homepage",
      PImage: "/PortfolioImage/image2.png",
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
      PDescription:
        "A custom browser homepage with quick access to search, social links, and daily tools.",
      PLiveDemoLink:
        "https://ashokbhaargaw.github.io/React-Learning-Projects/BrowserHomepage/dist/",
      PGithubLink:
        "https://github.com/AshokBhaargaw/React-Learning-Projects/tree/main/BrowserHomepage",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        {/* Section Heading */}
        <NormalHeading as="h3" className="mb-10 text-center md:text-left">
          Projects
        </NormalHeading>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-10">
          {ProjectCardsData.map((p, i) => (
            <ProjectCard
              key={i}
              PName={p.PName}
              PImage={p.PImage}
              PTack={[""]}
              PDescription={p.PDescription}
              PLiveDemoLink={p.PLiveDemoLink}
              PGithubLink={p.PGithubLink}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center md:justify-end px-4 md:px-12 max-w-screen">
          <Button variant="ghost" onClick={() => router.push("/portfolio")}>
            Check All Projects <MdOutlineNavigateNext />
          </Button>
        </div>
      </Container>
    </section>
  );
}
