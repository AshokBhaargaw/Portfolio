"use client";

import Link from "next/link";
import { Container, Heading } from "../index";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      link: "https://wa.me/7014372575",
      icon: <FaWhatsapp />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      link: "https://github.com/AshokBhaargaw",
      icon: <FaGithub />,
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 pb-5">
      <Container>
        {/* MAIN FOOTER */}
        <div className="flex flex-col gap-8 text-center md:flex-row md:justify-around md:text-left">
          {/* LEFT */}
          <div className="space-y-3">
            <button onClick={scrollToTop}>
              <Heading> Ashok Bhaargaw </Heading>
            </button>

            <p className="mx-auto max-w-xs text-sm text-gray-400 md:mx-0">
              Front-end Developer | Continuous Learner
            </p>
          </div>

          {/* CENTER */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-1">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Get in touch
            </h4>

            <div className="flex justify-center gap-4 md:justify-start">
              {socialLinks.map(({ link, icon, name }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition"
                >
                  <span className="text-lg text-white">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ashok Bhaargaw. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
