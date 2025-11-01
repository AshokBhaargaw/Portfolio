import { Container, Heading } from "../index";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      link: "http://wa.me/7014372575",
      icon: <FaWhatsapp />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashokbhaargaw/",
      icon: <FaLinkedin />,
    },
    {
      name: "Github",
      link: "https://github.com/AshokBhaargaw",
      icon: <FaGithub />,
    },
  ];

  const quickLinks = ["Home", "About", "Portfolio", "Contact"];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pb-5 pt-15 ">
      <Container className="flex justify-around">
        {/* Left: Name + Tagline */}
        <div className="w-3/12 space-y-3">
          <button onClick={scrollToTop} className="cursor-pointer">
            <Heading align="left">Ashok Bhaargaw</Heading>
          </button>
          <p className="text-sm text-gray-400 max-w-xs cursor-default">
            Front-end Developer | Continuous Learner
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="cursor-default text-sm font-semibold text-purple-300 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul typeof="disk" className="pl-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  onClick={scrollToTop}
                  className="text-gray-300"
                  to={link === "Home" ? "/" : link}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col space-y-3">
          <h4 className="cursor-default text-sm font-semibold text-purple-300 uppercase tracking-wider">
            Get in touch
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((socialData) => (
              <a key={socialData.link}
                href={socialData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 group"
              >
                <span className="text-white text-lg group-hover:scale-110 transition-transform">
                  {socialData.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom: Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ashok Bhaargaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
