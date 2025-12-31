"use client";

import { useRef, useEffect } from "react";
import {
  SiAdobephotoshop,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReplit,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CursorIcon } from "../../../Components/Icons/CursorIcon";
import { AntigravityIcon } from "../../../Components/Icons/AntigravityIcon";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type SkillCategory = {
  category: string;
  items: Skill[];
};

export default function Skillbar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const skillsData: SkillCategory[] = [
    {
      category: "Frontend Skills",
      items: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
      ],
    },
    {
      category: "UI Skills",
      items: [
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
    {
      category: "CMS",
      items: [
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      ],
    },
    {
      category: "Collabration",
      items: [
        { name: "Git", icon: SiGit, color: "#007ACC" },
        { name: "GitHub", icon: SiGithub, color: "#007ACC" },
      ],
    },
    {
      category: "IDEs",
      items: [
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Cursor", icon: CursorIcon, color: "#F0F0F0" },
        { name: "Replit", icon: SiReplit, color: "#F26207" },
        { name: "Anti Gravity", icon: AntigravityIcon, color: "#fff" },
      ],
    },
  ];

  // Clone data for infinite scroll effect
  const infiniteSkills = [...skillsData, ...skillsData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    // Speed: pixels per frame. Adjust for desired smoothness/speed.
    const speed = 0.5;

    const scroll = () => {
      if (scrollContainer) {
        // If we've scrolled past the first set of data (approx half width), reset to 0
        // We verify this by checking scrollWidth/2. 
        // Note: precise calculation is better, but this simple check works for identical content.
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (
    <div className="py-5 overflow-hidden relative">
      {/* Gradient Masks */}
      {/* <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-background to-transparent pointer-events-none" /> */}

      {/* 
        Scroll Container
        overflow-x-auto allows 'sticky' children to work.
        no-scrollbar utility (if exists) or inline style to hide scrollbar.
       */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex shrink-0 gap-10 pl-4">
          {infiniteSkills.map((categoryData, index) => (
            <div key={`${categoryData.category}-${index}`} className="flex items-center gap-6 p-2 rounded-2xl border border-border/30 bg-secondary/5 backdrop-blur-sm">

              {/* Sticky Category Label */}
              <div className="sticky left-0 z-10 px-4 py-2 bg-background/80 backdrop-blur-md rounded-lg border-r border-primary/20 shadow-sm">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary whitespace-nowrap">
                  {categoryData.category}
                </span>
              </div>

              {/* Skills Items */}
              <div className="flex gap-4 pr-4">
                {categoryData.items.map((skill, idx) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/60 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(168,85,247,0.1)] shrink-0"
                  >
                    <div className="text-xl text-muted-foreground group-hover:text-white transition-colors">
                      <skill.icon style={{ color: skill.color }} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
