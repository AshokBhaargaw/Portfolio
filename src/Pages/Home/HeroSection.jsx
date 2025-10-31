import React from "react";
import MyHeroImage from "/myCutOut.png";
import { Container, Button, Heading } from "../../Components/index";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <section className="min-h-[95vh] flex justify-between place-items-center">
        <div className="w-9/12 ">
          <Heading align="left">Ashok Bhaargaw</Heading>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg mb-10">
            I build fast, interactive web applications that users love. With 2+
            years of WordPress experience, I've transitioned to modern React
            development to create scalable, high-performance solutions.
          </p>
          <div className="flex justify-between w-6/12">
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              className="w-28"
            >
              Contact
            </Button>
            <Button onClick={() => {
              navigate("/portfolio")
            }} className="w-28" variant="secondary">
              Portfolio
            </Button>
          </div>
        </div>
        <div className=" h-130 w-full">
          <Spline scene="https://prod.spline.design/tr1hOa1j6ttPriUK/scene.splinecode" />
        </div>

        {/* <img
            src={MyHeroImage}
            alt="Image"
            className="border-b border-dark-border drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300"
            width={400}
          /> */}
      </section>
    </Container>
  );
}
