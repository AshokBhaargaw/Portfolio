// app/admin/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#0F172A] text-white">
      {children}
    </div>
  );
}
