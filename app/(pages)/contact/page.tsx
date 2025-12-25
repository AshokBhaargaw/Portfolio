import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  Container,
  Blackboard,
  Heading,
  ContactInfoCard,
} from "@/Components/";
import Form from "./Form";

export default function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      link: "http://wa.me/7014372575",
      icon: <FaWhatsapp />,
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/ashokbhaargaw/",
      icon: <FaTwitter />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/ashokbhaargaw/",
      icon: <FaFacebook />,
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
    {
      name: "Instagram",
      link: "https://www.instagram.com/dev.ashokbhaargaw/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <Container className="min-h-screen pt-30 md:px-4 ">
      <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <Heading as="h1" className="mb-6 text-center md:text-left">
            Let&apos;s Get in touch
          </Heading>

          <ContactInfoCard
            ContactIcon={"📞"}
            ContactMode="Phone"
            ContactInfo="+91 70143 72575"
          />
          <ContactInfoCard
            ContactIcon={"💌"}
            ContactMode="MAIL"
            ContactInfo="ashokbhaargaw@gmail.com"
          />
          <ContactInfoCard
            ContactIcon={"📍"}
            ContactMode="Location"
            ContactInfo="Ramdevra, Rajasthan"
          />

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((socialData, i) => (
              <a
                key={i}
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

        {/* Right: Form */}
        <div className="w-full mt-10 md:w-1/2 flex justify-center">
          <Blackboard className="w-full max-w-lg md:p-6">
            <Form />
          </Blackboard>
        </div>

      </div>
    </Container>
  );
}
