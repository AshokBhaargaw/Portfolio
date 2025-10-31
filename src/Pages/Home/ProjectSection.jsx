import Wave3 from "/Wave3.svg";
import {
  NormalHeading,
  ProjectCard,
  Container,
  Button,
} from "../../Components";
import PortfolioImage1 from "/PortfolioImage/image.png";
import { FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiReacthookform } from "react-icons/si";
import { useNavigate  } from "react-router-dom";

export default function ProjectSection() {
    let navigate = useNavigate();

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
  ];

  return (
    <div className="min-h-screen bg-dark-border">
      <div className="overflow-hidden max-w-[100vw]">
        <img src={Wave3} style={{ marginLeft: -10, minWidth: "105vw" }} />
      </div>
      <NormalHeading as="h2">Projects</NormalHeading>
      <Container>
        <div className="flex overflow-x-scroll">
          {ProjectCardsData.map((Project, i) => (
            <ProjectCard
              key={i}
              PName={Project.PName}
              PImage={Project.PImage}
              PTack={Project.PTack}
              PDescription={Project.PDescription}
              PLiveDemoLink={Project.PLiveDemoLink}
              PGithubLink={Project.PGithubLink}
              className="mx-10 mt-5 min-w-80"
            />
          ))}
        </div>
        <div className="text-right">
          <Button onClick={()=>{ navigate('/portfolio'); window.scrollTo({top: 0}) } } variant="ghost">Check All Projects</Button>
        </div>
      </Container>
      <div className="overflow-hidden max-w-[100vw]">
        <img
          src={Wave3}
          style={{ marginLeft: -10, minWidth: "105vw", rotate: "180deg" }}
        />
      </div>
    </div>
  );
}
