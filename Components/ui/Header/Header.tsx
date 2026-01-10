"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Instagram,
  Home,
  Briefcase,
  Phone,
  X,
  ArrowUpRight,
  Facebook,
} from "lucide-react";
import Button from "../Buttons/Button";
import Heading from "../Heading/Heading";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [showSocial, setShowSocial] = useState(false);
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
      title: "Whatsapp",
      icon: Phone,
      link: "https://wa.me/917014372575?text=Hi%20Ashok%20%F0%9F%91%8B,%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.%0ALooking%20forward%20to%20your%20response.",
    },
    {
      title: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/ashokbhaargaw.dev/",
    },
    {
      title: "Facebook",
      icon: Facebook,
      link: "https://www.Facebook.com/ashokbhaargaw/",
    },
  ];

  return (
    <header className="flex justify-center w-full">
      {/* Scroll Gradient Overlay */}
      <div
        className={`fixed top-0 w-full h-24 bg-linear-to-b z-40 from-background to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`
          fixed top-4 z-50 flex items-center justify-between 
          w-11/12 md:w-5/6 max-w-7xl
          px-4 py-2 md:px-6 md:py-3
          rounded-full border bg-red-500
          transition-all duration-300 ease-in-out
          ${
            scrolled
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
          <Heading
            as="h4"
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            Ashok Bhaargaw
          </Heading>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 bg-background/50 p-1 rounded-full border border-white/5"
        >
          {navLinks.map((nav) => {
            const isActive = pathname === nav.link;
            return (
              <Link
                key={nav.link}
                href={nav.link}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <nav.icon
                  size={16}
                  className={`${isActive ? "text-primary" : ""}`}
                />
                <span>{nav.title}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white/5 animate-pulse -z-10" />
                )}
              </Link>
            );
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
              <ArrowUpRight
                size={16}
                className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setShowSocial(!showSocial)}
          aria-label="Toggle menu"
        >
          {showSocial ? <X size={24} /> : <IoShareSocialSharp size={24} />}
        </button>
        {/* Mobile Social Links */}

        {showSocial && (
          <div className="flex absolute right-2 min-w-40 justify-start  top-15 bg-black rounded-2xl p-2 flex-col md:hidden items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="p-2 rounded-full w-full text-gray-400 hover:text-white hover:bg-white/10 transition flex gap-2"
              >
                <social.icon size={18} />
                {social.title.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
