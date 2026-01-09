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
  Button,
} from "@/Components/ui";
import Form from "./Form";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      link: "https://wa.me/917014372575?text=Hi%20Ashok,%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20developer%20role%20/%20opportunity.%0ALooking%20forward%20to%20your%20response.",
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
      link: "https://www.instagram.com/ashokbhaargaw.dev/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section id="contact" className="" >
      <Container className="min-h-screen md:px-4 ">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <Heading as="h1" className="mb-6 text-center w-full">
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
            <div className="flex flex-wrap gap-4 mt-6 justify-center w-full">
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
              <Link href="tel:+917014372575">
                <Button >
                  Call Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Blackboard className="w-full max-w-lg md:p-6">
              <Form />
            </Blackboard>
          </div>

        </div>
      </Container>
    </section>
  );
}
