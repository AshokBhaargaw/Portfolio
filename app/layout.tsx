import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashok Bhaargaw",
  description: "Ashok Bhaargaw website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          cz-shortcut-listen="true"
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen min-h-screen flex-col justify-between`}
        >
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
