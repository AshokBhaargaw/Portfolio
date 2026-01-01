"use client";

import { useState } from "react";

import Overview from "./_Overview";
import Project from "./_Project";
import Experience from "./_Experience";
import SocialDetails from "./_SocialDetails";

type Section = "overview" | "project" | "experience" | "social";

export default function AdminPage() {
  const [active, setActive] = useState<Section>("overview");

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row">
      {/* Sidebar / Topbar */}
      <aside className="w-full  md:w-64 md:min-h-screen bg-linear-to-b from-purple-800 to-purple-950">
        <nav className=" flex md:flex-col justify-around gap-2 p-4 md:space-y-4 ">
          <SidebarButton
            active={active === "overview"}
            onClick={() => setActive("overview")}
          >
            Overview
          </SidebarButton>

          <SidebarButton
            active={active === "project"}
            onClick={() => setActive("project")}
          >
            Projects
          </SidebarButton>

          <SidebarButton
            active={active === "experience"}
            onClick={() => setActive("experience")}
          >
            Experience
          </SidebarButton>

          <SidebarButton
            active={active === "social"}
            onClick={() => setActive("social")}
          >
            Social
          </SidebarButton>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex w-full p-4 md:p-8 bg-[#1E293B] ">
        {active === "overview" && <Overview />}
        {active === "project" && <Project />}
        {active === "experience" && <Experience />}
        {active === "social" && <SocialDetails />}
      </main>
    </div>
  );
}



// Button
function SidebarButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        whitespace-nowrap
        rounded-xl
        px-3 md:px-4 py-2 md:py-2
        text-sm md:text-base
        transition
        cursor-pointer
        ${active ? "bg-purple-600" : "bg-purple-700 hover:bg-purple-600"}
      `}
    >
      {children}
    </button>
  );
}
