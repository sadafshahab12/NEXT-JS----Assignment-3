import React from "react";
import styles from "../ui/button.module.css";
import { useRouter } from "next/navigation";
const Pages = () => {
  const route = useRouter();
  return (
    <>
      <div>
        <button className={styles.footerBtn} onClick={() => route.push("/")}>
          Home
        </button>
      </div>
      <div>
        <button
          className={styles.footerBtn}
          onClick={() => route.push("/about")}
        >
          About
        </button>
      </div>
      <div>
        <button
          className={styles.footerBtn}
          onClick={() => route.push("/service")}
        >
          Services
        </button>
      </div>
      <div>
        <button
          className={styles.footerBtn}
          onClick={() => route.push("/contact")}
        >
          Contact
        </button>
      </div>
      <div>
        <button
          className={styles.footerBtn}
          onClick={() => route.push("/footer")}
        >
          Footer
        </button>
      </div>
    </>
  );
};

export default Pages;
