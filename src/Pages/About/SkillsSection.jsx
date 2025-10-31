import WaveImage from "/wave.svg";
import {
  Container,
  NormalHeading,
  Blackboard,
  Skillbar,
} from "../../Components";
import TreeImage from "/tree.png";
import { FaReact, FaJs, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function SkillsTree() {
  return (
    <div>
      <div className="overflow-hidden max-w-[105vw]">
        <img
          src={WaveImage}
          style={{ margin: -5, marginLeft: -10, minWidth: "105vw" }}
        />
      </div>
      <div className="min-h-screen bg-dark-border m-0 pt-10">
        <Container className="h-full flex justify-between place-items-center">
          <div className="w-6/12 h-full flex place-items-center justify-center">
            <img src={TreeImage} alt="Tree" width={"70%"} />
          </div>
          <div className=" w-6/12 h-full flex justify-center place-items-center">
            <Blackboard className={"w-130"}>
              <NormalHeading as="h6"> Skill Set </NormalHeading>
              <Skillbar icon={<FaReact />} skill="React JS" value={75} />
              <Skillbar icon={<SiTypescript />} skill="TypeScript" value={60} />
              <Skillbar icon={<FaJs />} skill="JavaScript" value={75} />
              <Skillbar icon={<SiTailwindcss />} skill="tailwind" value={70} />
              <Skillbar icon={<FaBootstrap />} skill="Bootstrap" value={60} />
              <Skillbar icon={<FaCss3Alt />} skill="CSS" value={80} />
              <Skillbar icon={<FaHtml5 />} skill="HTML" value={90} />
            </Blackboard>
          </div>
        </Container>
      </div>
      <div className="overflow-hidden max-w-[100vw]">
        <img
          src={WaveImage}
          style={{
            margin: -5,
            marginLeft: -10,
            minWidth: "105vw",
            rotate: "180deg",
          }}
        />
      </div>
    </div>
  );
}
