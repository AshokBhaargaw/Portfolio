"use client";

import { Container, Button, Heading } from "@/Components/ui";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <Container>
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-9/12 text-center md:text-left">
          <Heading align="left" className="text-3xl sm:text-4xl md:text-5xl">
            Ashok Bhaargaw
          </Heading>

          <p
            className="text-gray-500 dark:text-gray-400 mt-5 text-sm sm:text-base md:text-lg
            leading-relaxed max-w-xl mx-auto md:mx-0 mb-10 "
          >
            I build fast, interactive web applications that users love. With 2+
            years of WordPress experience, I’ve transitioned to modern React
            development to create scalable, high-performance solutions.
          </p>

          <div
            className="
            flex flex-col
            sm:flex-row
            gap-4
            sm:gap-6
            items-center
            justify-center
            md:justify-start
          "
          >
            <Button
              className="w-full sm:w-auto"
              onClick={() => router.push("/contact")}
            >
              Contact
            </Button>

            <a
              href="/Ashok_Bhaargaw_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto">
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Right Containt */}
        <div className="hidden md:block w-full h-130"> </div>
      </section>
    </Container>
  );
}
