import type { Metadata } from "next";
import { Header, Footer } from "@/Components/ui";
import React from "react";
import TabBar from "@/Components/ui/TabBar/TabBar";

export const metadata: Metadata = {
  title: "Ashok Bhaargaw | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web development. Explore projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header should contain <nav> internally */}
      <Header />

      {/* Main content area (VERY IMPORTANT FOR SEO) */}
      <main id="main-content" role="main">
        {children}
      </main>

      {/* Footer semantic landmark */}
      <Footer />
      <TabBar/>
    </>
  );
}
