"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram, Home, User, Briefcase, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import Button from "../Buttons/Button";
import Heading from "../Heading/Heading";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { icon: Home, title: "Home", link: "/" },
    { icon: Briefcase, title: "Portfolio", link: "/portfolio" },
    { icon: Phone, title: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    {
      title: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
    },
    {
      title: "GitHub",
      icon: Github,
      link: "https://github.com/ashokbhaargaw/",
    },
    {
      title: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/dev.ashokbhaargaw/",
    },
  ];

  return (
    <header className="flex justify-center w-full">
      {/* Scroll Gradient Overlay */}
      <div
        className={`fixed top-0 w-full h-24 bg-linear-to-b z-40 from-background to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'
          }`}
      />

      <div
        className={`
          fixed top-4 z-50 flex items-center justify-between 
          w-11/12 md:w-5/6 max-w-7xl
          px-4 py-2 md:px-6 md:py-3
          rounded-full border bg-red-500
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-surface/50 backdrop-blur-xl border-white/10 shadow-lg shadow-primary/5"
            : "bg-surface/50 backdrop-blur-md border-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative h-10 min-w-10 overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/TagsIcon.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <Heading as="h4" className="text-xl md:text-2xl font-bold tracking-tight">
            Ashok Bhaargaw
          </Heading>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-background/50 p-1 rounded-full border border-white/5">
          {navLinks.map((nav) => {
            const isActive = pathname === nav.link;
            return (
              <Link
                key={nav.link}
                href={nav.link}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}
                `}
              >
                <nav.icon size={16} className={`${isActive ? "text-primary" : ""}`} />
                <span>{nav.title}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white/5 animate-pulse -z-10" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+917014137575"
            className="w-full flex items-center justify-center"
          >
            <Button variant="primary" className="h-9 px-6 text-sm group">
              Hire Me
              <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl md:hidden transition-all duration-300
          ${menu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <nav className="flex flex-col gap-6 w-full max-w-xs ">
            {navLinks.map((nav, index) => (
              <Link
                key={nav.link}
                href={nav.link}
                onClick={() => setMenu(false)}
                className="flex items-center mx-auto min-w-40 gap-4 text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <nav.icon size={28} className="text-primary" />
                {nav.title}
              </Link>
            ))}
          </nav>

          <div className="w-full max-w-xs h-px bg-white/10" />

          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <Link
                key={social.title}
                href={social.link}
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>

          <a
            href="tel:+917014137575"
            className="w-full flex items-center justify-center"
          >
            <Button variant="primary" className="h-9 px-6 text-sm group">
              Hire Me
              <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>

        </div>
      </div>
    </header>
  );
}
