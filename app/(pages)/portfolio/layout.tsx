import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Ashok Bhaargaw",
  description:
    "Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web development. Explore projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
