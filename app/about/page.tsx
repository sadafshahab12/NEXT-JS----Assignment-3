"use client";
import React from "react";
import Link from "next/link";
import Contactme from "../components/Contactme";

const About = () => {
  return (
    <>
      <div className="bg-[#fff8a5] h-[100vh]">
        <h3 className="text-2xl font-sans font-bold lg:p-5 sm:p-2 p-1 text-center">
          Let me introduce mySelf!
        </h3>
        <h1 className="text-4xl font-bold text-center py-3 text-blue-800 p-4">
          About Me
        </h1>

        <p className="p-5 lg:leading-10 md:leading-9 sm:leading-9 leading-6 text-justify lg:text-xl md:text-[1rem] text-sm lg:w-[50rem] md:w-auto sm:w-auto w-auto m-auto">
          I am <span className="font-bold text-blue-500">Sadaf Shahab</span>
          from Karachi, Pakistan. I have completed my education{" "}
          <span className="font-bold text-blue-500">Bachelor in Commerce</span>.
          I am Front-End Developer with{" "}
          <span className="font-bold text-red-500">
            {" "}
            HTML, CSS, JAVASCRIPT, TYPESCRIPT, ReactJS, Tailwind CSS{" "}
          </span>{" "}
          . I have skills of web designing through Figma UI/UX. I have ability
          to convert Figma Template into Real website. I am{" "}
          <span className="font-bold text-green-700">
            Graphics Designer
          </span>{" "}
          also. I am Learning{" "}
          <span className="font-bold text-blue-500">
            {" "}
            Full Stack Development{" "}
          </span>{" "}
          MERN from Saylani Mass IT Training .I am Learning{" "}
          <span className="font-bold text-blue-500">
            {" "}
            Certified Cloud Applied Generative AI Engineer From GIAIC
          </span>
          .
        </p>
        <div className="flex items-center gap-3 justify-center">
          <Link href="/">
            <p className="border border-black mt-2 p-2 font-bold hover:bg-sky-500 hover:border-0 w-[8rem] duration-200 m-auto text-center rounded">
              Back to Home
            </p>
          </Link>

          <Contactme />
        </div>
      </div>
    </>
  );
};

export default About;
