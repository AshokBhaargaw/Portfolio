"use client";

import React, { useRef, useState } from "react";
import {
  Container,
  HalfContainer,
  Skillbar,
  Blackboard,
  Heading,
} from "@/Components";

import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export default function ThreeInOne() {
  // Right Section
  const btnsRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState(1);

  const baseClasses4ScollBtns =
    "text-4xl font-extrabold cursor-pointer text-slate-400 duration-100";
  const highLightButtonClasses =
    "text-6xl font-extrabold cursor-pointer text-white duration-100";

  return (
    <div className="bg-dark-bg flex items-center border-b border-slate-600">
      <Container className="flex">
        {/* LEFT PANEL */}
        <HalfContainer className="p-5 my-30">
          <Blackboard className="min-h-[460px] flex items-center justify-center">
            <div className="w-full">
              {/* EDUCATION */}
              {selected === 0 && (
                <div>
                  <Heading as="h4" align="left">
                    Bachelor of Computer Applications (BCA)
                  </Heading>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                    Learned fundamentals of programming, web technologies, and
                    computer systems. Built academic projects using HTML, CSS,
                    JavaScript, and React.
                  </p>

                  <Heading as="h4" align="left">
                    Secondary & Senior Secondary Education
                  </Heading>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                    Built a strong academic foundation while developing
                    analytical and problem-solving skills through science
                    subjects.
                  </p>
                </div>
              )}

              {/* SKILLS */}
              {selected === 1 && (
                <div>
                  <Skillbar
                    icon={<SiNextdotjs />}
                    skill="Next.js (Currently Learning)"
                    value={20}
                  />
                  <Skillbar icon={<FaReact />} skill="React.js" value={80} />
                  <Skillbar
                    icon={<SiTypescript />}
                    skill="TypeScript"
                    value={65}
                  />
                  <Skillbar icon={<FaJs />} skill="JavaScript" value={80} />
                  <Skillbar
                    icon={<SiTailwindcss />}
                    skill="Tailwind CSS"
                    value={85}
                  />
                  <Skillbar
                    icon={<FaBootstrap />}
                    skill="Bootstrap"
                    value={60}
                  />
                  <Skillbar icon={<FaCss3Alt />} skill="CSS" value={85} />
                  <Skillbar icon={<FaHtml5 />} skill="HTML" value={90} />
                </div>
              )}

              {/* EXPERIENCE */}
              {selected === 2 && (
                <div>
                  <Heading as="h3" align="left">
                    Vande Digital
                  </Heading>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                    Built and customized WordPress websites using modern themes
                    and plugins. Focused on responsive design and UX.
                  </p>

                  <Heading as="h3" align="left">
                    Kreativo Pro
                  </Heading>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
                    Developed and maintained WordPress sites while collaborating
                    with teams and clients. Strengthened HTML, CSS, and web
                    fundamentals that now support React development.
                  </p>
                </div>
              )}
            </div>
          </Blackboard>
        </HalfContainer>

        {/* RIGHT PANEL */}
        <HalfContainer className="p-5 flex flex-col">
          <div ref={btnsRef} className="flex flex-col items-center gap-3">
            <h2
              onClick={() => setSelected(0)}
              className={
                selected === 0
                  ? highLightButtonClasses
                  : baseClasses4ScollBtns
              }
            >
              Education
            </h2>

            <h2
              onClick={() => setSelected(1)}
              className={
                selected === 1
                  ? highLightButtonClasses
                  : baseClasses4ScollBtns
              }
            >
              Skill Sets
            </h2>

            <h2
              onClick={() => setSelected(2)}
              className={
                selected === 2
                  ? highLightButtonClasses
                  : baseClasses4ScollBtns
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
