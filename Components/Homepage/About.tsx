import { NormalHeading, Container, Heading } from "@/Components/ui";

export default function HeroSection() {
  return (
    <Container className="min-h-screen pt-16 px-4">
      <div className="flex flex-col md:flex-row min-h-[70vh] gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <NormalHeading className="text-4xl sm:text-5xl md:text-6xl">
            About me
          </NormalHeading>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:pl-6 md:border-l border-white/20 space-y-10">
          {/* Intro */}
          <div className="space-y-3">
            <NormalHeading as="h6">Hello</NormalHeading>

            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              I’m{" "}
              <Heading as="h6" className="inline-block">
                Ashok Bhaargaw
              </Heading>
              , a passionate <b>front-end developer</b> specializing in{" "}
              <b>React.js</b>.
              <br />I have worked on WordPress in past companies but now I’m
              focusing on React development to build modern and interactive web
              apps. Currently expanding my skills beyond React by learning
              Next.js and backend development, aiming to become a full-stack
              JavaScript developer.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <NormalHeading as="h6">Experience</NormalHeading>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              I started my career with <i>WordPress development</i>, designing
              websites and managing clients. Over time, I realized my true
              interest lies in modern web development, which led me to{" "}
              <b>focus on React and JavaScript.</b>
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <NormalHeading as="h6">Skills</NormalHeading>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              I create responsive, scalable, and maintainable web applications
              using React, Redux, JavaScript, HTML, CSS, and modern tools like
              Vite and TailwindCSS. I enjoy turning designs into fully
              functional interfaces and bringing ideas to life on the web.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
