"use client";
import React from "react";
import Image from "next/image";
import Contactme from "./components/Contactme";

export default function Home() {
  return (
    <>
      <div className="mx-w-[1440px] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="first flex justify-center flex-col  gap-5 bg-blue-200 lg:h-[33rem] md:h-[25rem] sm:h-[26rem] h-[23rem] relative">
          <h1 className="text-4xl font-bold text-center">
            Welcome to My First Next js Project
          </h1>
          <p className="text-center font-sans text-[1.2rem]">
            It is a blend of{" "}
            <span className="font-bold">three different classes</span>, and I am
            also incorporating some additional elements that I am exploring on
            my own.
          </p>
          <Contactme />
        </div>
        <div className="second relative w-full lg:h-[33rem] md:h-[20rem] sm:h-[30rem] h-[30rem]">
          <Image
            src="/images/nextjs.webp"
            alt="nestjs 14 image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </>
  );
}
