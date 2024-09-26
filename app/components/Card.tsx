import React from "react";
import Contactme from "./Contactme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <>
      <div className="bg-blue-300 my-5 rounded-2xl p-5 text-center flex gap-4 flex-col h-[22rem]">
        <FontAwesomeIcon
          icon={props.icon}
          className="grid lg:text-6xl md:text-5xl sm:text-4xl text-3xl"
        />
        <h5 className="grid lg:text-3xl text-2xl font-bold">{props.title}</h5>
        <p className="grid lg:text-[1.2rem] md:text-[1rem]">{props.info}</p>
        <Contactme />
      </div>
    </>
  );
};

export default Card;
