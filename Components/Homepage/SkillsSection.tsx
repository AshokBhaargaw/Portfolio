"use client";

import Image from "next/image";
import {
  Container,
  NormalHeading,
  Blackboard,
  Skillbar,
} from "@/Components/ui";

import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function SkillsTree() {
  return (
    <div>
      {/* Top Wave */}
      <div className="overflow-hidden max-w-[105vw]">
        <Image
          src="/wave.svg"
          alt="Wave"
          width={1920}
          height={200}
          className="-ml-2 min-w-[105vw]"
          priority
        />
      </div>

      {/* Main Section */}
      <div className="min-h-screen bg-[#2C2460] py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Tree Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/tree.png"
                alt="Skill Tree"
                width={500}
                height={500}
                className="w-[65%] sm:w-[50%] md:w-[70%] h-auto"
              />
            </div>

            {/* Skill Board */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Blackboard className="w-full max-w-md">
                <NormalHeading as="h6">Skill Set</NormalHeading>

                <Skillbar icon={<FaReact />} skill="React JS" value={75} />
                <Skillbar icon={<SiTypescript />} skill="TypeScript" value={60} />
                <Skillbar icon={<FaGithub />} skill="Git & GitHub" value={60} />
                <Skillbar icon={<FaJs />} skill="JavaScript" value={75} />
                <Skillbar
                  icon={<SiTailwindcss />}
                  skill="Tailwind CSS"
                  value={70}
                />
                <Skillbar icon={<FaBootstrap />} skill="Bootstrap" value={60} />
                <Skillbar icon={<FaCss3Alt />} skill="CSS" value={80} />
                <Skillbar icon={<FaHtml5 />} skill="HTML" value={90} />
              </Blackboard>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Wave */}
      <div className="overflow-hidden max-w-[105vw]">
        <Image
          src="/wave.svg"
          alt="Wave"
          width={1920}
          height={200}
          className="-ml-2 rotate-180 min-w-[105vw]"
        />
      </div>
    </div>
  );
}
