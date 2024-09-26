"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Pages from "../components/Pages";

const Footer = () => {
  return (
    <>
      <footer className="w-full pb-5 bg-[#303538] grid lg:auto-cols-auto md:grid-cols-1 sm:auto-cols-auto">
        <div className="text-white text-center leading-[3rem]">
          All Right Reserved <FontAwesomeIcon icon={faCopyright} /> 2024
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 lg:gap-[1rem] md:gap-[0] sm:gap-[0] ">
          <Pages />
        </div>
      </footer>
    </>
  );
};

export default Footer;
