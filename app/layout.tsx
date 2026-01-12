import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsTracker from "@/Components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashok Bhaargaw | Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies. Explore projects, skills, and professional experience.",

  verification: {
    google: "v_98gh4pRjHvWUaAuJZoqdtdzq8TQ8xhlnsU4sasX4k",
  },
 icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ashok Bhaargaw | Frontend Developer",
    description:
      "I build fast, modern, SEO-friendly web applications using React and Next.js.",
    url: "https://ashokbhaargaw.vercel.app",
    siteName: "Ashok Bhaargaw",
    images: [
      {
        url: "https://ashokbhaargaw.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashok Bhaargaw – Frontend Developer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashok Bhaargaw | Frontend Developer",
    description:
      "Frontend Developer building fast and modern web applications with React & Next.js.",
    images: ["https://ashokbhaargaw.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XRN63ESXVV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRN63ESXVV', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ReduxProvider>
          <AnalyticsTracker />
          {children}
        </ReduxProvider>
        {/* Vercel tools should be in body */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
