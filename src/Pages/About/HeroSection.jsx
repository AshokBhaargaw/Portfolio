import { NormalHeading, Container, Heading } from "../../Components";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <Container className="min-h-screen pt-10">
      {/* left Section  */}
      <div className="flex justify-between place-items-center pt-25">
        <div className="w-6/12 flex justify-center place-items-center ">
          <NormalHeading className="z-10">About me</NormalHeading>
        </div>

        {/* Right Section  */}
        <div className="w-6/12 pl-5 border-l">
          <div>
            <NormalHeading as="h6" align="left">
              Hello
            </NormalHeading>
            <span>
              I’m{" "}
              <Heading as="h6" className="inline-block">
                Ashok Bhaargaw{" "}
              </Heading>
              , a passionate <b> front-end developer </b> specializing in{" "}
              <b> React.js</b>. <br /> I have worked on WordPress in past
              companies but now I’m focusing on React development to build
              modern and interactive web apps.Currently expanding my skills beyond React by learning Next.js and backend development, aiming to become a full-stack JavaScript developer.
            </span>
          </div>

          <div className="my-10">
            <NormalHeading as="h6" align="left">
              Experience
            </NormalHeading>
            <p>
              I started my career with <i> WordPress development</i>, designing
              websites and managing clients. Over time, I realized my true
              interest lies in modern web development, which led me to
              <b> focus on React and JavaScript.</b>
            </p>
          </div>
          <div className="my-10">
            <NormalHeading as="h6" align="left">
              Skills
            </NormalHeading>
            <p>
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
