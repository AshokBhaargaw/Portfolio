import React from "react";
import { Sidebar, MobileTabBar } from "./OptionBar";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#0F172A] text-white">
      {/* Desktop Sidebar - Hidden on mobile */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0 p-4 md:p-6 overflow-y-auto">
        {children}
      </main>

      {/* Mobile Tab Bar - Hidden on desktop */}
      <MobileTabBar />
    </div>
  );
}
