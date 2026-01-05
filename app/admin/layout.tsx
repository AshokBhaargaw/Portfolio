// app/admin/layout.tsx
import React from "react";
import { Sidebar, MobileTabBar } from "./OptionBar";
import type { NavItem } from "./OptionBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const navItems: NavItem[] = [
    { href: "/admin", label: "Overview", icon: "LayoutDashboard" },
    { href: "/admin/projects", label: "Projects", icon: "FolderKanban" },
    { href: "/admin/experience", label: "Experience", icon: "Briefcase" },
    { href: "/admin/social", label: "Social", icon: "Share2" },
    { href: "/admin/profile", label: "Profile", icon: "User" },
  ];


  return (
    <div className="min-h-screen flex bg-[#0F172A] text-white">
      <Sidebar navItems={navItems} />
      <main className="flex-1 md:ml-64 pb-20 md:pb-0 p-4 md:p-6 overflow-y-auto">
        {children}
      </main>
      <MobileTabBar navItems={navItems} />
    </div>
  );
}