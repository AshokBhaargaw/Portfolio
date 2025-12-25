"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Container, Heading } from "../index";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menu, setmenu] = useState(false);
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
      icon: <FaLinkedin size={25} />,
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
    },
    {
      title: "Github",
      icon: <FaGithub size={25} />,
      link: "https://github.com/ashokbhaargaw/",
    },
    {
      title: "Instagram",
      icon: <FaInstagram size={25} />,
      link: "https://www.instagram.com/dev.ashokbhaargaw/",
    },
  ];

  return (
    <header>
      <Container className="min-h-12 fixed z-10 bg-black left-[50%] translate-x-[-50%] rounded-3xl my-2 flex items-center justify-between px-2 md:px-10 shadow-lg border-gray-400/40 border">
        {/* Logo */}
        <div className="">
          <Link
            className="flex justify-center place-items-center hover:scale-103 ease-in-out duration-300"
            href={"/"}
          >
            <span>
              <Image
                src="/TagsIcon.png"
                alt="Logo"
                width={40}
                height={40}
                className="hover:scale-105 transition drop-shadow-xl inline-block"
              />
            </span>
            {
              <Heading
                className="hover:text-xl text-xl ml-2 mt-1"
                as="h6"
                align="left"
              >
                Ashok Bhaargaw
              </Heading>
            }
          </Link>
        </div>

        {/* Centeral Navigation */}
        <nav className="hidden md:min-w-1/5 md:flex md:justify-around md:items-center">
          {navLink.map((nav, index) => (
            <Link
              key={index}
              href={nav.link}
              className="group flex items-center text-xl font-medium mx-2 gap-1"
            >
              <span>{nav.icon}</span>
              <span
                className={
                  pathname == nav.link
                    ? ""
                    : "max-w-0 overflow-hidden opacity-0 scale-95 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap"
                }
              >
                {nav.title}
              </span>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:min-w-1/6 md:flex md:justify-around md:items-center">
          {socialLink.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="group flex items-center gap-2 text-xl font-medium"
            >
              <span className="max-w-0 overflow-hidden opacity-0 scale-95 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap ">
                {social.title}
              </span>
              <span> {social.icon} </span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation  */}
        <div className="md:hidden w-8 flex h-full">
          <button onClick={() => setmenu((prev) => !prev)}>
            {menu ? <RxCross1 size={22} /> : <CiMenuBurger size={22} />}
          </button>
          {menu && (
            <div className="bg-gray-900 rounded-b-xl rounded-r-xl border-x border-b border-gray-700 absolute z-40 top-12 right-0 p-2">
              <nav className="">
                {navLink.map((nav, index) => (
                  <Link
                    key={index}
                    href={nav.link}
                    className="group flex items-center gap-2 text-xl font-medium m-2"
                  >
                    <span>
                      {nav.icon} {nav.title}
                    </span>
                  </Link>
                ))}
              </nav>
              <div className="flex flex-row">
                {socialLink.map((social, index) => (
                  <Link key={index} href={social.link} className="m-2">
                    <span> {social.icon} </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
