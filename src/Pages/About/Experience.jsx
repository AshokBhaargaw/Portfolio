import React from "react";
import { Container, Heading, NormalHeading } from "../../Components";

export default function Experience() {
  return (
    <div>
      <Container className="min-h-screen pt-15">
        <Heading> → Experience ← </Heading>
        <div className="flex justify-between pt-10">
          <div className="w-6/12 px-5">
            <p className="text-justify">
              At Vande Digital, I worked as a WordPress Developer and Social
              Media Manager, where I designed and maintained responsive websites
              that aligned with each client’s brand identity. I collaborated
              closely with the marketing team to build visually appealing,
              conversion-focused pages and optimized website performance for a
              smoother user experience across all devices. Alongside
              development, I also managed digital campaigns to ensure consistent
              branding and audience engagement across social platforms.
            </p>
          </div>
          <div className="w-6/12 flex place-items-center border-l">
            <b className="text-2xl">→</b>{" "}
            <NormalHeading as="h1" align="center" className="ml-15">
              {" "}
              Vande Digital
            </NormalHeading>
          </div>
        </div>
        <div className="flex justify-between pt-10">
          <div className="w-6/12 flex place-items-center justify-end border-r">
            <NormalHeading as="h1" align="center" className="mr-15">
              {" "}
              Kreativo Pro
            </NormalHeading>
            <b className="text-2xl">←</b>
          </div>
          <div className="w-6/12 px-5">
            <p className="text-justify">
              During my time at Kreativo Pro, I served as a Customer Support
              Executive and Team Coordinator, managing client communications and
              ensuring timely delivery of projects. I coordinated with designers
              and developers, assigning and tracking work to keep operations
              running efficiently. This role helped me understand how business
              goals connect with user experience and gave me strong foundations
              in project management, communication, and workflow optimization.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
