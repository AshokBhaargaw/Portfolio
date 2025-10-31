import React, { useRef, useState } from "react";
import {
  Container,
  HalfContainer,
  Skillbar,
  Blackboard,
  NormalHeading,
  Heading,
} from "../../Components";
import { FaReact, FaJs, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function ThreeInOne() {
  // Right Section
  const btnsRef = useRef();
  const [selected, setSelected] = useState(1);
  let baseClasses4ScollBtns =
    "text-4xl font-extrabold cursor-pointer text-slate-400 duration-100";
  let highLightButtonClasses =
    "text-6xl font-extrabold cursor-pointer text-white duration-100";

  return (
    <div className=" bg-dark-bg flex place-items-center border-b border-slate-600">
      <Container className="flex">
        <HalfContainer className="p-5 my-30 ">
          <Blackboard
            className={"min-h-115 flex justify-center place-items-center"}
          >
            <div className="w-[100%]">
              {selected === 0 ? (
                <div>
                  <div>
                    <Heading as="h4" align="left">
                      Bachelor of Computer Applications - BCA
                    </Heading>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                      Learned fundamentals of programming, web technologies, and
                      computer systems. Built multiple academic projects using
                      HTML, CSS, JavaScript, and React.
                    </p>
                  </div>
                  <div>
                    <Heading as="h4" align="left">
                      Secondary & Senior Secondary Education
                    </Heading>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                      Built a strong foundation in academics and computer
                      knowledge while developing analytical and problem-solving
                      skills through core science subjects.
                    </p>
                  </div>
                </div>
              ) : selected === 1 ? (
                <div>
                  <Skillbar icon={<FaReact />} skill="React JS" value={75} />
                  <Skillbar
                    icon={<SiTypescript />}
                    skill="TypeScript"
                    value={60}
                  />
                  <Skillbar icon={<FaJs />} skill="JavaScript" value={75} />
                  <Skillbar
                    icon={<SiTailwindcss />}
                    skill="tailwind"
                    value={70}
                  />
                  <Skillbar
                    icon={<FaBootstrap />}
                    skill="Bootstrap"
                    value={60}
                  />
                  <Skillbar icon={<FaCss3Alt />} skill="CSS" value={80} />
                  <Skillbar icon={<FaHtml5 />} skill="HTML" value={90} />
                </div>
              ) : (
                <div>
                  <div>
                    <Heading as="h3" align="left">
                      Vande Digital
                    </Heading>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                    Built and customized WordPress websites using modern themes and plugins. Learned fundamentals of front-end design, responsive layouts, and user-focused web experiences.
                    </p>
                  </div>
                  <div>
                    <Heading as="h3" align="left">
                      Kreativo Pro
                    </Heading>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                     Developed and maintained WordPress sites while collaborating with clients and teams. Strengthened understanding of web structure, HTML, CSS, and dynamic content — laying a strong base for React development.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Blackboard>
        </HalfContainer>
        <HalfContainer className="p-5 flex flex-col">
          <div ref={btnsRef} className="flex flex-col place-items-center gap-3">
            <h2
              onClick={() => setSelected(0)}
              className={
                selected === 0 ? highLightButtonClasses : baseClasses4ScollBtns
              }
            >
              Education
            </h2>
            <h2
              onClick={() => setSelected(1)}
              className={
                selected === 1 ? highLightButtonClasses : baseClasses4ScollBtns
              }
            >
              Skill Sets
            </h2>
            <h2
              onClick={() => setSelected(2)}
              className={
                selected === 2 ? highLightButtonClasses : baseClasses4ScollBtns
              }
            >
              Experience
            </h2>
          </div>
        </HalfContainer>
      </Container>
    </div>
  );
}
