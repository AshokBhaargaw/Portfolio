import { useState } from "react";
import TagsIcon from "/TagsIcon.png";
import { Heading } from "../index";
import { Container } from "../index";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header({
  showMyName,
  Headerclasses,
  ConatinerClasses,
}) {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const navItems = [
    { icon: "❤️", label: "Hello", to: "/" },
    { icon: "😎", label: "About", to: "/about" },
    { icon: "📂", label: "Portfolio", to: "/portfolio" },
    { icon: "📞", label: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://www.github.com/AshokBhaargaw" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
    },
    { icon: <FaTwitter />, link: "https://x.com/AshokBhaargaw" },
  ];

  return (
    <header className={`${Headerclasses} absolute z-100 w-full top-0`}>
      <Container
        className={`min-h-12 flex place-items-center justify-between ${ConatinerClasses}`}
      >
        {/* Logo Image  */}
        <div className="w-2/12">
          <Link className="flex justify-center place-items-center " to={"/"}> 
            <span>
              <img
                src={TagsIcon}
                alt="Logo"
                width={40}
                className="hover:scale-105 transition drop-shadow-xl inline-block"
              />
            </span>
            {(location.pathname !== "/" || showMyName) && (
              <span className="ml-2">
                <Heading className=" text-xl " as="h6" align="left">
                  Ashok Bhaargaw
                </Heading>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation  */}
        <nav className="flex justify-center items-center gap-4 text-2xl text-white w-4/12">
          {navItems.map(({ icon, label, to }, i) => (
            <NavLink
              key={i}
              to={to}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={({ isActive }) =>
                `flex items-center transition-all duration-300 ${isActive ? "text-blue-400" : "text-white"}`
              }
            >
              {icon}
              <span
                className={`ml-2 overflow-hidden text-lg transition-all duration-500 ease-in-out ${
                  hovered === i || location.pathname === to
                    ? "max-w-[100px] translate-x-0"
                    : "max-w-0 -translate-x-2"
                }`}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </nav>
        <div className="flex justify-center items-center text-2xl text-whitei w-2/12 gap-5">
          {socialLinks.map((social) => (
            <a key={social.link} href={social.link} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </Container>
    </header>
  );
}
