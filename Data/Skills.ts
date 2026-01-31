import {
  SiAdobephotoshop,
  SiAppwrite,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiReplit,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CursorIcon } from "@/Components/Icons/CursorIcon";
import { AntigravityIcon } from "@/Components/Icons/AntigravityIcon";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

export type SkillCategory = {
  category: string;
  items: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
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
    category: "CMS",
    items: [{ name: "WordPress", icon: SiWordpress, color: "#21759B" }],
  },
  {
    category: "Backend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
      { name: "Nest Js", icon: SiNestjs, color: "#ff0000" },
      { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#00ED64" },
    ],
  },
  {
    category: "Mobile App",
    items: [
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
    ],
  },
  {
    category: "BaaS",
    items: [
      { name: "AppWrite", icon: SiAppwrite, color: "#FD366E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFC400" },
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
