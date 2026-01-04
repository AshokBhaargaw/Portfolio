"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { LayoutDashboard, FolderKanban, Briefcase, Share2 } from "lucide-react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// Export Sidebar component for desktop
export function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/experience", label: "Experience", icon: Briefcase },
    { href: "/admin/social", label: "Social", icon: Share2 },
  ];

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-linear-to-b from-purple-900/20 via-purple-800/20 to-pink-800/20 backdrop-blur-xl border-r border-purple-800/30 z-20">
        <div className="w-full px-6 py-3">
          <div className="mb-8">
            <Link href={"/"} className="flex gap-2 mb-5 items-center text-xs text-slate-200 mt-1 uppercase tracking-widest font-bold" >
              <BiLeftArrow />
              Go Home
            </Link>
            <h1 className="text-xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              Admin Panel
            </h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">
              Dashboard
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <SidebarLink
                  key={item.href}
                  href={item.href}
                  active={isActive}
                  icon={Icon}
                >
                  {item.label}
                </SidebarLink>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

// Export MobileTabBar component for mobile
export function MobileTabBar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/experience", label: "Experience", icon: Briefcase },
    { href: "/admin/social", label: "Social", icon: Share2 },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-xl border-t border-purple-800/30">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <MobileTabLink
              key={item.href}
              href={item.href}
              active={isActive}
              icon={Icon}
            >
              {item.label}
            </MobileTabLink>
          );
        })}
      </div>
    </nav>
  );
}

// Helper component for Sidebar links
function SidebarLink({
  href,
  active,
  icon: Icon,
  children,
}: {
  href: string;
  active: boolean;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all text-sm font-medium group
        ${active
          ? "bg-gradient-to-r from-pink-600/30 to-purple-600/30 text-white shadow-lg shadow-pink-500/10"
          : "text-slate-300 hover:bg-purple-700/20 hover:text-white"
        }`}
    >
      <Icon
        className={`w-5 h-5 transition-colors ${active ? "text-pink-400" : "text-slate-400 group-hover:text-purple-400"
          }`}
      />
      <span>{children}</span>
    </Link>
  );
}

// Helper component for Mobile Tab links
function MobileTabLink({
  href,
  active,
  icon: Icon,
  children,
}: {
  href: string;
  active: boolean;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-1 w-full h-full rounded-lg transition-all relative group
        ${active ? "text-purple-400" : "text-slate-400"}`}
    >
      {active && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-full" />
      )}
      <Icon
        className={`w-5 h-5 transition-all ${active
          ? "text-purple-400 scale-110"
          : "text-slate-400 group-active:scale-95"
          }`}
      />
      <span
        className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${active ? "text-purple-400" : "text-slate-500"
          }`}
      >
        {children}
      </span>
    </Link>
  );
}
