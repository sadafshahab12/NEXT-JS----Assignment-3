"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


import React from 'react'

const Navbars = () => {

    return (
      <>
        <nav className="px-5 py-5 flex justify-between items-center bg-yellow-500 h-[4rem]">
          <h1 className="text-3xl font-bold text-blue-600 p-0 w-5">
            <Link href="/">Navbar</Link>
          </h1>
          <FontAwesomeIcon icon={faBars} className="lg:hidden md:hidden sm:block"/>
  
          <ul className="lg:flex justify-evenly w-[30rem] md:flex sm:hidden hidden">
            <li className="list-none cursor-pointer  font-bold hover:text-white duration-300">
            <Link href="/">Home</Link>
            </li>
            <li className="list-none cursor-pointer font-bold hover:text-white duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="list-none cursor-pointer font-bold hover:text-white duration-300">
              <Link href="/service">Services</Link>
            </li>
            <li className="list-none cursor-pointer font-bold hover:text-white duration-300">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="list-none cursor-pointer font-bold hover:text-white duration-300">
              <Link href="/footer">Footer</Link>
            </li>
          </ul>
        </nav>

      </>
    );
}

export default Navbars
