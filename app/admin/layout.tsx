"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-[#0F172A] text-white">
      {/* Sidebar */}
      <div className="w-64" />
      <aside className="w-64 fixed left-0 h-screen z-10 bg-linear-to-b from-purple-800/20 to-pink-800/20 p-4">
        <nav className="flex flex-col gap-3">
          <SidebarLink href="/admin" active={pathname === "/admin"}>
            Overview
          </SidebarLink>

          <SidebarLink
            href="/admin/projects"
            active={pathname.startsWith("/admin/projects")}
          >
            Projects
          </SidebarLink>

          <SidebarLink
            href="/admin/experience"
            active={pathname.startsWith("/admin/experience")}
          >
            Experience
          </SidebarLink>

          <SidebarLink
            href="/admin/social"
            active={pathname.startsWith("/admin/social")}
          >
            Social
          </SidebarLink>
        </nav>
      </aside>

      {/* Right side content */}
      <main className="flex-1 p-5 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function SidebarLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-xl px-4 py-2 transition text-sm font-medium
        ${
          active
            ? "bg-pink-600/30"
            : "bg-purple-700/30 hover:bg-purple-600"
        }`}
    >
      {children}
    </Link>
  );
}
