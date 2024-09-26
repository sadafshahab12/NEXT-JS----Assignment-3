import React from "react";
import Link from "next/link";
import styles from "../ui/button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYahoo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <>
      <div className="bg-black text-white h-[100vh]">
        <h1 className="font-bold text-3xl text-center pt-5">Contact Me</h1>
        <div className="links mx-5 pt-10">
          <Link href="https://www.linkedin.com/in/sadaf-shahab-ssr123">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faLinkedin} className="w-5" /> LinkedIn
            </p>
          </Link>
          <Link href="https://www.youtube.com/@SadafShahab-ssr12-Webdeveloper">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faYoutube} className="w-5" /> YouTube
            </p>
          </Link>
          <Link href="https://github.com/sadafshahab12">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faGithub} className="w-5" /> GitHub
            </p>
          </Link>
          <Link href="mailto:sadafshahab123@yahoo.com">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faYahoo} className="w-5" /> Yahoo
            </p>
          </Link>
          <Link href="https://wa.me/+923402195735">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faWhatsapp} className="w-5" /> Whatsapp
            </p>
          </Link>
          <Link href="https://www.instagram.com/sadafshahab12/">
            <p className={`${styles.btn}  ${styles.linkicon}`}>
              <FontAwesomeIcon icon={faInstagram} className="w-5" /> Instagram
            </p>
          </Link>
        </div>

        <Link href="/">
          <p className="border mt-10 border-white p-2 font-bold hover:bg-sky-500 w-[10rem] duration-200 m-auto text-center rounded">
            Back to Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default Contact;
