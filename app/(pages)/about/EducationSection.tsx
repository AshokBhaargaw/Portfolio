import { Container, NormalHeading, Heading } from "@/Components";

export default function EducationSection() {
  return (
    <div className="min-h-screen bg-dark-border py-16">
      <Container className="px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left Section – Education Details */}
          <div className="w-full md:w-1/2 md:border-r border-white/20 md:pr-8 space-y-20">

            {/* BCA */}
            <div className="text-center md:text-left">
              <Heading as="h4">
                Bachelor of Computer Applications (BCA)
              </Heading>
              <p className="text-slate-300">
                Jai Narain Vyas University, Jodhpur
              </p>
              <p className="text-slate-500">2021 – 2024</p>
              <p className="mt-3 leading-relaxed">
                Learned fundamentals of programming, web technologies, and
                computer systems. Built multiple academic projects using HTML,
                CSS, JavaScript, and React.
              </p>
            </div>

            {/* School */}
            <div className="text-center md:text-left">
              <Heading as="h4">
                Secondary & Senior Secondary Education
              </Heading>
              <p className="text-slate-300">GSSS, Ramdevra</p>
              <p className="mt-3 leading-relaxed">
                Built a strong foundation in academics and computer knowledge
                while developing analytical and problem-solving skills through
                core science subjects.
              </p>
            </div>

          </div>

          {/* Right Section – Heading */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <NormalHeading as="h1">
              Education
            </NormalHeading>
          </div>

        </div>
      </Container>
    </div>
  );
}
