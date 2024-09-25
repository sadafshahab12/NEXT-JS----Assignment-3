"use client";
import React from "react";
import Card from "../components/Card";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
const Service = () => {
  return (
    <>
      <div className="mx-w-[1440px] h-[100%] grid lg:grid-cols-2 sm:grid-cols-1 gap-8 p-10 bg-black">
        <Card
          icon={faReact}
          title="Front End Development"
          info="I specialize in front-end development, utilizing Next.js, React, and Tailwind CSS.My focus is on creating responsive and scalable web applications that enhance user experience."
        />
        <Card
          icon={faLaptopCode}
          title="Front End Development"
          info="I specialize in front-end development, utilizing HTML, CSS, and JavaScript. My focus is on creating responsive and scalable web applications that enhance user experience."
        />
      </div>
    </>
  );
};

export default Service;
