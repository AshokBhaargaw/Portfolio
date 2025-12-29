"use client";

import { useRef, useState } from "react";
import {
  Container,
  HalfContainer,
  Skillbar,
  Blackboard,
  Heading,
} from "@/Components/ui";

import { FaReact, FaJs, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function ThreeInOne() {
  const [selected, setSelected] = useState(1);

  const baseBtn = "cursor-pointer text-slate-400 font-bold transition-all";
  const activeBtn = "cursor-pointer text-white font-extrabold";

  return (
    <div className="bg-dark-bg border-b border-slate-600">
      <Container className="flex flex-col-reverse md:flex-row gap-10 pb-15">
        {/* CONTENT PANEL */}
        <div className="md:px-4 md:w-1/2">
          <Blackboard className="min-h-115 min-w-[80vw] p-4 sm:p-6">
            <div className="w-full">
              {/* EDUCATION */}
              {selected === 0 && (
                <div className="space-y-8">
                  <div>
                    <Heading as="h4" align="left">
                      Bachelor of Computer Applications (BCA)
                    </Heading>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      Learned fundamentals of programming, web technologies, and
                      computer systems. Built academic projects using HTML, CSS,
                      JavaScript, and React.
                    </p>
                  </div>

                  <div>
                    <Heading as="h4" align="left">
                      Secondary & Senior Secondary Education
                    </Heading>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      Built a strong academic foundation while developing
                      analytical and problem-solving skills through science
                      subjects.
                    </p>
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {selected === 1 && (
                <div className="space-y-4">
                  <Skillbar icon={<SiNextdotjs />} skill="Next.js" value={20} />
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
                <div className="space-y-8">
                  <div>
                    <Heading as="h4" align="left">
                      Vande Digital
                    </Heading>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      Built and customized WordPress websites with focus on
                      responsive design and UX.
                    </p>
                  </div>

                  <div>
                    <Heading as="h4" align="left">
                      Kreativo Pro
                    </Heading>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      Developed and maintained WordPress sites while
                      strengthening core web fundamentals.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Blackboard>
        </div>

        {/* NAVIGATION PANEL */}
        <div className="px-4 md:w-1/2 flex flex-row md:flex-col justify-center md:items-center gap-6 text-center">
          {["Education", "Skill Sets", "Experience"].map((label, index) => (
            <button
              key={label}
              onClick={() => setSelected(index)}
              className={`
                  ${selected === index ? activeBtn : baseBtn}
                  text-base  md:text-5xl min-w-30 
                `}
            >
              {label}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
