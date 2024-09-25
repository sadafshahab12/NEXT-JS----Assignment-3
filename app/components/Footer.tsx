"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="h-14 bg-[#057bc0]">
        <p className="text-white text-center leading-[3.5rem]">
          All Right Reserved <FontAwesomeIcon icon={faCopyright} /> 2024
        </p>
      </footer>
    </>
  );
};

export default Footer;
