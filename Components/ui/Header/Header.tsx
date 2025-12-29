"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import Button from "../Buttons/Button";
import Heading from "../Heading/Heading";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const navLink = [
    { icon: "❤️", title: "Home", link: "/" },
    { icon: "😎", title: "About", link: "/about" },
    { icon: "📂", title: "Portfolio", link: "/portfolio" },
    { icon: "📞", title: "Contact", link: "/contact" },
  ];

  const socialLink = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
    },
    {
      title: "GitHub",
      icon: <FaGithub size={22} />,
      link: "https://github.com/ashokbhaargaw/",
    },
    {
      title: "Instagram",
      icon: <FaInstagram size={22} />,
      link: "https://www.instagram.com/dev.ashokbhaargaw/",
    },
  ];

  return (
    <header>
      <div className="fixed top-0 z-30 min-h-20 w-full bg-linear-to-b from-background to-transparent" />

      <div className="fixed top-2 left-1/2 z-50 flex h-12 w-11/12 md:w-5/6 -translate-x-1/2 items-center justify-between rounded-4xl border border-gray-400/40 bg-black px-4 shadow-lg md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 md:w-1/5">
          <span className="relative h-10 w-10">
            <Image
              src="/TagsIcon.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </span>
          <Heading as="h4" className="text-2xl">
            Ashok Bhaargaw
          </Heading>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:w-1/5 md:justify-center gap-3  md:min-w-2/5">
          <span className="hidden md:inline md:min-w-20" />
          {navLink.map((nav) => (
            <Link
              key={nav.link}
              href={nav.link}
              className="group flex items-center gap-1 text-xl font-medium"
            >
              <span>{nav.icon}</span>
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                  pathname === nav.link
                    ? "max-w-50 opacity-100 scale-100"
                    : "max-w-0 opacity-0 scale-95 group-hover:max-w-50 group-hover:opacity-100 group-hover:scale-100"
                }`}
              >
                {nav.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Social + CTA */}
        <div className="hidden md:flex items-center justify-end md:gap-4 md:min-w-2/6">
          {socialLink.map((social) => (
            <Link
              key={social.title}
              href={social.link}
              target="_blank"
              className="group flex items-center gap-1 text-xl font-medium"
            >
              <span className="overflow-hidden max-w-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100">
                {social.title}
              </span>
              {social.icon}
            </Link>
          ))}
          <Button variant="ghost">Hire Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenu((prev) => !prev)}>
          {menu ? <RxCross1 size={22} /> : <CiMenuBurger size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div className="absolute right-4 top-14 w-56 rounded-xl border border-gray-700 bg-gray-900 p-4">
            <nav>
              {navLink.map((nav) => (
                <Link
                  key={nav.link}
                  href={nav.link}
                  onClick={() => setMenu(false)}
                  className="block py-2 text-lg font-medium"
                >
                  {nav.icon} {nav.title}
                </Link>
              ))}
            </nav>

            <Button className="mt-3 w-full">Hire Now</Button>

            <div className="mt-3 flex justify-around">
              {socialLink.map((social) => (
                <Link key={social.title} href={social.link} target="_blank">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
