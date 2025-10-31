import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  Container,
  HalfContainer,
  Blackboard,
  NormalHeading,
  Heading,
  ContactInfoCard,
} from "../../Components";
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
    <div>
      <Container className="flex justify-center place-items-center min-h-screen">
        <HalfContainer className="min-h-100 flex flex-col">
          <Heading as="h1" className="mb-5">
            Let's Get in touch
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

          <div className="flex gap-5 self-center mt-3">
            {socialLinks.map((socialData) => (
              <a
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
        </HalfContainer>
        <HalfContainer className="min-h-100 flex place-items-center justify-center">
          <Blackboard className={"w-150 h-110"}>
            <Form />
          </Blackboard>
        </HalfContainer>
      </Container>
    </div>
  );
}
