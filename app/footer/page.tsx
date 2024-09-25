"use client";
import React from "react";
import Contactme from "../components/Contactme";
import Contacts from "../components/Contacts";
import Form from "../components/Form";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#daa3fa] flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 ">
          <div className="p-5 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              First Next js Project
            </h1>
            <p className="text-center font-sans text-[1.2rem] pt-5">
              It is a blend of{" "}
              <span className="font-bold">three different classes</span>, and I
              am also incorporating some additional elements that I am exploring
              on my own.
            </p>
            <Contactme />
          </div>
          <div>
            <Contacts />
          </div>
          <Form />
        </div>
      </footer>
    </>
  );
};

export default Footer;
