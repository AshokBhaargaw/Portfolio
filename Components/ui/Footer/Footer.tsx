"use client";

import Link from "next/link";
import { Container, Heading } from "../index";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "../index";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      link: "https://wa.me/7014372575",
      icon: <MessageCircle size={20} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      link: "https://github.com/AshokBhaargaw",
      icon: <Github size={20} />,
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <button onClick={scrollToTop} className="text-left group">
              <Heading as="h2" className="text-3xl text-center md:text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 group-hover:to-primary transition-all duration-300">
                Ashok Bhaargaw
              </Heading>
            </button>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-center md:text-left">
              Front-end Developer passionate about building accessible, pixel-perfect, and performant web experiences.
            </p>
            <div className="flex gap-4 justify-center md:justify-start w-full">
              {socialLinks.map(({ link, icon, name }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-primary/20 hover:border-primary/50 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 md:col-start-7 place-self-center md:place-self-start">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="hidden md:block w-8 h-px bg-primary"></span> Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={scrollToTop}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top (Mobile only mostly, or separate column) */}
          <div className="md:col-span-2 flex flex-col justify-end items-start place-self-center md:place-self-end md:items-end">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="group flex items-center gap-2 text-muted-foreground hover:text-white border-white/5 hover:border-white/20"
            >
              Back to Top
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ashok Bhaargaw. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤</span> by <a href="https://ashokbhaargaw.vercel.app/"> Ashok Bhaargaw</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
