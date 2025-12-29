import { Container, Heading, NormalHeading } from "@/Components/ui";

export default function Experience() {
  return (
    <Container className="min-h-screen py-16 px-4">
      <Heading> → Experience ← </Heading>

      {/* Experience 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 pt-12">

        {/* Company */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:border-r border-white/20 md:pr-6">
          <NormalHeading as="h1" align="center">
            Vande Digital
          </NormalHeading>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 md:pl-6">
          <p className="text-justify text-sm sm:text-base leading-relaxed">
            At Vande Digital, I worked as a WordPress Developer and Social
            Media Manager, where I designed and maintained responsive websites
            that aligned with each client’s brand identity. I collaborated
            closely with the marketing team to build visually appealing,
            conversion-focused pages and optimized website performance for a
            smoother user experience across all devices. Alongside development,
            I also managed digital campaigns to ensure consistent branding and
            audience engagement across social platforms.
          </p>
        </div>
      </div>

      {/* Experience 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 pt-16">

        {/* Description */}
        <div className="w-full md:w-1/2 md:pr-6">
          <p className="text-justify text-sm sm:text-base leading-relaxed">
            During my time at Kreativo Pro, I served as a Customer Support
            Executive and Team Coordinator, managing client communications and
            ensuring timely delivery of projects. I coordinated with designers
            and developers, assigning and tracking work to keep operations
            running efficiently. This role helped me understand how business
            goals connect with user experience and gave me strong foundations
            in project management, communication, and workflow optimization.
          </p>
        </div>

        {/* Company */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start md:border-l border-white/20 md:pl-6">
          <NormalHeading as="h1" align="center">
            Kreativo Pro
          </NormalHeading>
        </div>
      </div>
    </Container>
  );
}
