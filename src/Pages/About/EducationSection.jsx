import { Container, NormalHeading, Heading } from "../../Components";

export default function EducationSection() {
  return (
    <div className="min-h-screen bg-dark-border">
      <Container className="flex justify-between place-items-center pt-20">
        <div className="w-6/12 border-r pr-5">
          <div className="my-20">
            <Heading as="h3">Bachelor of Computer Applications (BCA)</Heading>
            <p className="text-center text-slate-300">
              Jai Narain Vyas University, Jodhpur
            </p>
            <p className="text-center text-slate-500"> 2021- 2024</p>
            <p className="text-center ">
              Learned fundamentals of programming, web technologies, and
              computer systems. Built multiple academic projects using HTML,
              CSS, JavaScript, and React.
            </p>
          </div>
          <div className="my-20">
            <Heading as="h3">Secondary & Senior Secondary Education</Heading>
            <p className="text-center text-slate-300">GSSS, Ramdevra</p>
            <p className="text-center ">
              Built a strong foundation in academics and computer knowledge
              while developing analytical and problem-solving skills through
              core science subjects.
            </p>
          </div>
        </div>
        <div className="w-6/12 relative ">
          <NormalHeading as="h1"> Education </NormalHeading>
        </div>
      </Container>
    </div>
  );
}
