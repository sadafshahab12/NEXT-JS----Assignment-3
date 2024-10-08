import React from "react";
import Contactme from "./Contactme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <div className="bg-blue-300 my-5 rounded-2xl p-5 text-center flex gap-4 flex-col lg:h-[25rem] md:h-[18rem]">
        <FontAwesomeIcon
          icon={faReact}
          className="grid lg:text-7xl md:text-6xl sm:text-4xl text-3xl"
        />
        <h5 className="grid lg:text-3xl text-2xl font-bold">
          Front End Development
        </h5>
        <p className="grid lg:text-[1.2rem] md:text-[1rem] text-[0.8rem]">
          I specialize in front-end development, utilizing Next.js, React, and
          Tailwind CSS.My focus is on creating responsive and scalable web
          applications that enhance user experience.
        </p>
        <Contactme />
      </div>
      <div className="bg-blue-300 my-5 rounded-2xl p-5 text-center flex gap-4 flex-col lg:h-[25rem] md:h-[18rem]">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="grid lg:text-7xl md:text-6xl sm:text-4xl text-3xl"
        />
        <h5 className="grid lg:text-3xl text-2xl font-bold">
          Front End Development
        </h5>
        <p className="grid lg:text-[1.2rem] md:text-[1rem] text-[0.8rem]">
          I specialize in front-end development, utilizing HTML, CSS, and
          JavaScript. My focus is on creating responsive and scalable web
          applications that enhance user experience.
        </p>
        <Contactme />
      </div>
    </>
  );
};

export default Card;
