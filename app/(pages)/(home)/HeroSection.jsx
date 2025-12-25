"use client";

import { Container, Button, Heading } from "@/Components";
import { useRouter } from "next/navigation";
// import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  const router = useRouter();

  return (
    <Container className="bg-linear-to-b from-pink-500/5 to-purple-500/5 ">
      <section className="min-h-[95vh] flex items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-9/12">
          <Heading align="left">Ashok Bhaargaw</Heading>

          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
            I build fast, interactive web applications that users love. With 2+
            years of WordPress experience, I’ve transitioned to modern React
            development to create scalable, high-performance solutions.
          </p>

          <div className="flex gap-6">
            <Button onClick={() => router.push("/contact")}>
              Contact
            </Button>

            <a
              href="/Ashok_Bhaargaw_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Right Spline */}
        <div className="w-full h-[520px]">
          {/* <Spline scene="https://prod.spline.design/tr1hOa1j6ttPriUK/scene.splinecode" /> */}
        </div>
      </section>
    </Container>
  );
}
